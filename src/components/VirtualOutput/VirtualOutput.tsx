import React from 'react';
import './VirtualOutput.scss';
interface VirtualOutputProps {
  deviceItem: any;
  openVirtual: boolean;
  // videoSize: any;
  // setVideoSize: Function;
}
type VideoSizeType = {
  width: number;
  height: number;
};
interface VirtualOutputState {
  videoSize?: VideoSizeType;
  showProper?: boolean;
  renderTime?: number;
  fps?: number;
}
const ipcRenderer = window.electron.ipcRenderer;

function imageDataHRevert(sourceData) {
  const newData = new ImageData(sourceData.width, sourceData.height);
  for (var i = 0, h = sourceData.height; i < h; i++) {
    for (var j = 0, w = sourceData.width; j < w; j++) {
      newData.data[i * w * 4 + j * 4 + 0] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 0];
      newData.data[i * w * 4 + j * 4 + 1] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 1];
      newData.data[i * w * 4 + j * 4 + 2] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 2];
      newData.data[i * w * 4 + j * 4 + 3] =
        sourceData.data[i * w * 4 + (w - j) * 4 + 3];
    }
  }
  return newData;
}

const throttle = (fn, wait) => {
  let timer = null;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};
let fpsStart = 0,
  fpsCount = 0;
class VirtualOutput extends React.Component<
  VirtualOutputProps,
  VirtualOutputState
> {
  videoEl: React.RefObject<HTMLVideoElement>;
  canvasBuff: React.RefObject<HTMLCanvasElement>;
  canvasOutPut: React.RefObject<HTMLCanvasElement>;
  constructor(props: VirtualOutputProps) {
    super(props);
    this.state = {
      videoSize: {
        width: 1020,
        height: 720,
      },
      showProper: false,
      renderTime: 0,
      fps: 0,
    };
    this.videoEl = React.createRef();
    this.canvasBuff = React.createRef();
    this.canvasOutPut = React.createRef();
    this.canvasUpdate = this.canvasUpdate.bind(this);
    this.stopMediaTracks = this.stopMediaTracks.bind(this);
    this.stopMediaTracks = this.stopMediaTracks.bind(this);
    this.windowResize = this.windowResize.bind(this);
  }
  get canvasBuffContext() {
    return this.canvasBuff.current?.getContext('2d');
  }
  get canvasOutPutContext() {
    return this.canvasOutPut.current?.getContext('2d');
  }
  throttleTime = throttle((time) => {
    // 为什么可以，备注
    this.setState({
      renderTime: time,
    });
  }, 3000);
  throttleFps = throttle((fps) => {
    this.setState({
      fps,
    });
  }, 3000);
  windowResize() {
    const videoNode = this.videoEl.current;
    let width = videoNode?.clientWidth || 1076,
      height = videoNode?.clientHeight || 727;
    if (width < 1076) width = 1076;
    this.setState({
      videoSize: {
        width,
        height,
      },
    });
  }
  componentDidMount() {
    window.addEventListener('resize', this.windowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize);
  }
  componentDidUpdate(prevProps: VirtualOutputProps) {
    if (this.props.deviceItem?.deviceId !== prevProps.deviceItem?.deviceId) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            width: 1080,
            height: 720,
            deviceId: {
              exact: this.props.deviceItem?.deviceId,
            },
          },
        })
        .then((stream) => {
          const videoNode = this.videoEl.current;
          if (videoNode) {
            videoNode.srcObject = stream;
            videoNode.addEventListener('play', () => {
              const width = videoNode?.clientWidth || 1020;
              const height = videoNode?.clientHeight || 721;
              this.setState({
                videoSize: {
                  width,
                  height,
                },
              });
              ipcRenderer
                .invoke('init', {
                  videoSize: this.state.videoSize,
                })
                .then(() => {
                  fpsStart = Date.now();
                  this.canvasUpdate();
                });
            });
          }
        })
        .catch((error) => {
          console.error('error', error);
        });
    }
  }

  canvasUpdate() {
    const fps = Math.floor(1 / ((Date.now() - fpsStart) / 1000));
    fpsStart = Date.now();
    this.throttleFps(fps);
    // console.log('这是FPS', fps);
    // requestAnimationFrame rgba
    const videoNode = this.videoEl.current;
    // const clientWidth = videoNode?.clientWidth || 1020,
    //   clientHeight = videoNode?.clientHeight || 721;
    const clientWidth = this.state.videoSize.width,
      clientHeight = this.state.videoSize.height;
    if (videoNode) {
      this.canvasBuffContext?.drawImage(videoNode, 0, 0, clientWidth, clientHeight);
      const frame = this.canvasBuffContext?.getImageData(
        0,
        0,
        clientWidth,
        clientHeight
      );
      const start = Date.now();
      frame?.data &&
        ipcRenderer
          .invoke('render', {
            frameData: frame?.data,
            width: clientWidth,
            height: clientHeight,
          })
          .then(
            (result: {
              imgData: Buffer;
              time: number;
              output: number;
              entry: number;
            }) => {
              const { imgData, time, entry, output } = result;
              // console.log('Input Transform Cost:', entry - start);
              // console.log('Output Transform Cost:', Date.now() - output);
              // console.log('这是renderTime', time);
              this.throttleTime(time);
              const igD = new ImageData(
                new Uint8ClampedArray(imgData),
                clientWidth,
                clientHeight
              );
              this.canvasOutPutContext?.putImageData(igD, 0, 0);
              setTimeout(() => {
                // requestAnimationFrame(this.canvasUpdate);
                this.canvasUpdate();
              }, 0);
            }
          );
    }
  }
  stopMediaTracks(stream: { getTracks: () => any[] }) {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  render() {
    return (
      <div className="virtual-output">
        <div className={`properties ${this.state.showProper && 'active'}`}>
          {this.state.showProper ? (
            <div className="props-control">
              <p>
                FPS:<span>{this.state.fps}</span>
              </p>
              <p>
                Resolution:
                <span>
                  {this.state.videoSize.width}*{this.state.videoSize.height}
                </span>
              </p>
              <p>
                RenderTime:<span>{this.state.renderTime}ms</span>
              </p>
              <span
                onClick={() => {
                  this.setState({
                    showProper: false,
                  });
                }}
                style={{
                  position: 'absolute',
                  right: '10px',
                }}
              >
                关闭
              </span>
            </div>
          ) : (
            <span
              onClick={() => {
                this.setState({
                  showProper: true,
                });
              }}
            >
              显示性能参数
            </span>
          )}
        </div>
        <video
          autoPlay
          id="video"
          ref={this.videoEl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            zIndex: 2,
          }}
        ></video>
        <canvas
          ref={this.canvasBuff}
          {...this.state.videoSize}
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
        ></canvas>
        <canvas
          ref={this.canvasOutPut}
          {...this.state.videoSize}
          style={{
            position: 'absolute',
            zIndex: 3,
          }}
        ></canvas>
      </div>
    );
  }
}

export default VirtualOutput;
