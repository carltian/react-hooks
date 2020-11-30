import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router';
import { Menu, Button } from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { routeMap } from '../../app/routeConfig';

const { SubMenu } = Menu;
const pages = [
  {
    key: 'counter',
    path: routeMap.counter.path,
  }
];

function Main(props) {
  // Declare a new state variable, which we'll call "count"
  const [collapsed, setCollapsed] = useState(true);

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div style={{ width: 256 }}>
        <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {
              _.map(pages, (page) => {
                const { path, key } = page;
                return (
                  <Menu.Item
                    key={`${key}`}
                    icon={<UserOutlined />}
                    onClick={() => { props.history.push({pathname: path})} }
                    
                  >
                    {key}
                  </Menu.Item>
                );
              })
          }
        </Menu>
      </div>
    );
}

export default withRouter(Main);
