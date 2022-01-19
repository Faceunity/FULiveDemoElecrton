import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Select, Checkbox } from 'antd';
import './CameraMenu.scss';
const ipcRenderer = window.electron.ipcRenderer;
const { Option } = Select;
interface CameraMenuProps {
  openVirtual: boolean;
  currentCamera: any;
  setCurrentCamera: Function;
  setOpenVirtual: Function;
}

interface cameraType {
  deviceId: string;
  label: string;
}
//
const CameraMenu: FunctionComponent<CameraMenuProps> = (props) => {
  const { currentCamera, setCurrentCamera } = props;
  const [cameraList, setCameraList] = useState([]);
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices &&
      navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
        setCameraList(
          mediaDevices.filter((device) => device.kind === 'videoinput') as []
        );
      });
  }, []);
  useEffect(() => {
    setCurrentCamera(cameraList[0]);
  }, [cameraList]);
  const handleChange = useCallback(
    (value) => {
      setCurrentCamera(
        cameraList.find((item: cameraType) => item.deviceId === value)
      );
    },
    [cameraList]
  );
  const onChange = (e) => {
    props.setOpenVirtual(e.target.checked);
  };
  const openFile = (evt) => {
    evt.preventDefault();
    ipcRenderer.send('openFile');
  };
  return (
    <div className="camera-menu">
      <span>选择摄像头</span>
      <div className="camera-select">
        <Select
          style={{ width: 240 }}
          value={currentCamera?.deviceId || ''}
          onChange={handleChange}
        >
          {cameraList.map((item: cameraType) => {
            return (
              <Option key={item.deviceId} value={item.deviceId}>
                {item.label}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className="virtual-switch">
        <Checkbox checked={props.openVirtual} onChange={onChange}>
          虚拟摄像头
        </Checkbox>
      </div>
      <span className="help-world">
        <a download={true} href="../../../assets/readme.zip">打开帮助文档</a>
      </span>
    </div>
  );
};

export default CameraMenu;
