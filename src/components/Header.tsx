// src/components/Header.tsx
import { Layout, Typography, Avatar, Dropdown, Menu } from 'antd';
import socialLinks from '../config/socialLinks';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Link: AntLink } = Typography;

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const handleLogout = useAuthStore((state) => state.handleLogout);

  console.log("isAuthenticated:", isAuthenticated); // Verifique o valor aqui

  const menu = (
    <Menu>
      <Menu.Item key="panel">
        <Link to="/panel">Painel</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="header">
      <div className="header-links">
        <AntLink href="/">Home</AntLink>
        <AntLink href={socialLinks.soundcloud} target="_blank">
          SoundCloud
        </AntLink>
        <AntLink href={socialLinks.instagram} target="_blank">
          Instagram
        </AntLink>
        <AntLink href={socialLinks.bluesky} target="_blank">
          Bluesky
        </AntLink>
        {isAuthenticated && (
        <Dropdown overlay={menu} placement="bottomRight">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar src="profile.jpg" alt="User Avatar" />
          </div>
        </Dropdown>
      )}
      </div>
    </AntHeader>
  );
};