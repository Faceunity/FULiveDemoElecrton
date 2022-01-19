import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { Layout } from 'antd';
import VideoWindow from './view/VideoWindow/VideoWindow';
import ControlPanel from './view/ControlPanel/ControlPanel';
const { Sider } = Layout;

const AppRoot = () => {
  return (
    <Layout
      style={{
        height: '100%',
        background: '#E9EAF2',
        padding: '10px',
      }}
    >
      <Layout
        style={{
          background: '#E9EAF2',
        }}
      >
        <VideoWindow></VideoWindow>
      </Layout>
      <Sider
        style={{
          marginLeft: '10px',
          background: '#f0f0f0',
        }}
        width="26%"
      >
        <ControlPanel></ControlPanel>
      </Sider>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppRoot} />
      </Switch>
    </Router>
  );
}
