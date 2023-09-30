import React, { useState, useEffect } from 'react';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('근무표', '/dashboard', <DesktopOutlined />),
  getItem('간호사', '/dashboard/nurse', <UserOutlined />),
];

const MySider = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuClick = ({ key }: { key: string }) => {
    if (key) {
      navigate(key);
    }
  };
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState([location.pathname]);

  useEffect(() => {
    console.log(location.pathname);
    setSelectedMenu([location.pathname]);
  }, [location]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme='light'
    >
      <div className='demo-logo-vertical' />
      <Menu
        theme='light'
        mode='inline'
        items={items}
        onClick={handleMenuClick}
        selectedKeys={selectedMenu}
      />
    </Sider>
  );
};

export default MySider;
