// src/components/Header.tsx
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import socialLinks from '../config/socialLinks';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import styles from './style/Header.module.scss';

const { Header: AntHeader } = Layout;

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const handleLogout = useAuthStore((state) => state.handleLogout);

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
    <AntHeader className={styles["header"]}>
      <div className={styles["header-links"]}>
        <Link to="/">Home</Link>
        <a href={socialLinks.soundcloud} target="_blank" rel="noopener noreferrer">SoundCloud</a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={socialLinks.bluesky} target="_blank" rel="noopener noreferrer">Bluesky</a>
      </div>

      {isAuthenticated && (
        <Dropdown overlay={menu} placement="bottomRight" className={styles["header-avatar"]}>
          <Avatar src="/profile.jpg" alt="User Avatar" />
        </Dropdown>
      )}
    </AntHeader>
  );
};