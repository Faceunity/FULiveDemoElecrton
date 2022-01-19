import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { Layout } from 'antd';
import CameraMenu from 'components/CameraMenu/CameraMenu';
import VirtualOutput from 'components/VirtualOutput/VirtualOutput';
// import { CameraType } from '@faceunity/virtualcamera';
// import VirtualOutput from 'components/VirtualOutput/VirtualOutputHook';
const { Header, Content } = Layout;
interface VideoWindowProps {}
const ipcRenderer = window.electron.ipcRenderer;

const VideoWindow: FunctionComponent<VideoWindowProps> = () => {
  const [currentCamera, setCurrentCamera] = useState({});
  const [openVirtual, setOpenVirtual] = useState(false);

  useEffect(() => {
    ipcRenderer.send('setOpenVirtual', openVirtual);
  }, [openVirtual]);
  return (
    <Fragment>
      <Header
        style={{
          marginBottom: '10px',
          background: '#fff',
          borderRadius: '5px',
          padding: '0',
        }}
      >
        <CameraMenu
          currentCamera={currentCamera}
          openVirtual={openVirtual}
          setOpenVirtual={setOpenVirtual}
          setCurrentCamera={setCurrentCamera}
        ></CameraMenu>
      </Header>
      <Content
        style={{
          background: '#fff',
        }}
      >
        <VirtualOutput
          openVirtual={openVirtual}
          deviceItem={currentCamera}
          // videoSize={videoSize}
          // setVideoSize={setVideoSize}
        ></VirtualOutput>
      </Content>
    </Fragment>
  );
};

export default VideoWindow;
