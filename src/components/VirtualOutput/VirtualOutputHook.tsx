import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './VirtualOutput.scss';

interface VirtualOutputProps {
  deviceItem: any;
}
type VideoSizeType = {
  width: number;
  height: number;
};
const ipcRenderer = window.electron.ipcRenderer;
let renderFlag = true;
const VirtualOutput: FunctionComponent<VirtualOutputProps> = (props) => {
  const { deviceItem } = props;
  const videoEl = useRef<HTMLVideoElement>(null);
  const canvasBuff = useRef<HTMLCanvasElement>(null);
  const canvasOutPut = useRef<HTMLCanvasElement>(null);
  const [videoSize, setVideoSize] = useState<VideoSizeType>({
    width: 1020,
    height: 720,
  });
  const canvasBuffContext = useMemo(() => {
    return canvasBuff.current?.getContext('2d');
  }, [canvasBuff.current]);
  const canvasOutPutContext = useMemo(() => {
    return canvasOutPut.current?.getContext('2d');
  }, [canvasOutPut.current]);

  useEffect(() => {
    const width =
      JSON.parse(JSON.stringify(videoEl.current?.clientWidth)) || 1020;
    const height =
      JSON.parse(JSON.stringify(videoEl.current?.clientHeight)) || 720;
    setVideoSize({
      width,
      height,
    });
  }, [videoEl.current]);

  useEffect(() => {
    deviceItem?.deviceId &&
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            width: 1020,
            height: 720,
            deviceId: {
              exact: deviceItem?.deviceId,
            },
          },
        })
        .then((stream) => {
          const videoNode = videoEl.current;
          if (videoNode) {
            videoNode.srcObject = stream;
            videoNode.addEventListener('play', () => {
              setVideoSize({
                width: videoNode.clientWidth,
                height: videoNode.clientHeight,
              });
              ipcRenderer
                .invoke('init', {
                  videoSize: {
                    width: videoNode.clientWidth,
                    height: videoNode.clientHeight,
                  },
                })
                .then(() => {
                  if (renderFlag) {
                    canvasUpdate();
                    renderFlag = false;
                  }
                });
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }, [deviceItem, videoEl.current]);

  const canvasUpdate = useCallback(() => {
    // console.log('超频调用');
    const videoNode = videoEl.current;
    const clientWidth = videoSize.width,
      clientHeight = videoSize.height;
    // console.log(new Date(), clientWidth, clientHeight);
    if (videoNode) {
      canvasBuffContext?.drawImage(videoNode, 0, 0, clientWidth, clientHeight);
      const frame = canvasBuffContext?.getImageData(
        0,
        0,
        clientWidth,
        clientHeight
      );
      frame?.data &&
        ipcRenderer.invoke('render', frame?.data).then((result: any) => {
          canvasOutPutContext?.putImageData(
            new ImageData(
              new Uint8ClampedArray(result),
              clientWidth,
              clientHeight
            ),
            0,
            0
          );
          setTimeout(() => {
            canvasUpdate();
          }, 0);
        });
    }
  }, [videoEl.current, videoSize, canvasBuffContext, canvasOutPutContext]);

  const stopMediaTracks = (stream: { getTracks: () => any[] }) => {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  };

  return (
    <div className="virtual-output">
      <video
        autoPlay
        id="video"
        ref={videoEl}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // position: 'absolute',
          zIndex: 1,
        }}
      ></video>
      <canvas
        ref={canvasBuff}
        {...videoSize}
        style={{
          // position: 'absolute',
          zIndex: 2,
        }}
      ></canvas>
      <canvas
        ref={canvasOutPut}
        {...videoSize}
        style={{
          // position: 'absolute',
          zIndex: 10,
          // display: 'none',
        }}
      ></canvas>
    </div>
  );
};

export default VirtualOutput;
