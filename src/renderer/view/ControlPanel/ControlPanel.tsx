import * as React from 'react';
import { Button, Tabs } from 'antd';
import './ControlPanel.scss';
import SkinBeauty from '../SkinBeauty/SkinBeauty';
import BodyBeauty from '../BodyBeauty/BodyBeauty';
import FilterBeauty from '../FilterBeauty/FilterBeauty';
interface ControlPanelProps {}

interface ControlPanelState {}

export interface FuInterface {
  fuSdkChange: Function;
}
const { TabPane } = Tabs;
const ipcRenderer = window.electron.ipcRenderer;

class ControlPanel extends React.Component<
  ControlPanelProps,
  ControlPanelState
> {
  constructor(props: ControlPanelProps) {
    super(props);
    this.state = {};
    this.fuSdkChange = this.fuSdkChange.bind(this);
  }
  fuSdkChange(name: any, value: any) {
    ipcRenderer.send('changeFuParams', {
      name,
      value,
    });
  }
  render() {
    return (
      <div className="control-panel">
        <Tabs defaultActiveKey="1" centered type="card" tabBarGutter={0}>
          <TabPane tab="美肤" forceRender key="1">
            <SkinBeauty fuSdkChange={this.fuSdkChange}></SkinBeauty>
          </TabPane>
          <TabPane tab="美型" forceRender key="2">
            <BodyBeauty fuSdkChange={this.fuSdkChange}></BodyBeauty>
          </TabPane>
          <TabPane tab="滤镜" forceRender key="3">
            <FilterBeauty fuSdkChange={this.fuSdkChange}></FilterBeauty>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ControlPanel;
