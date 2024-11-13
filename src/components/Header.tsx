// src/components/Header.tsx
import { Layout, Typography } from 'antd';
import socialLinks from '../config/socialLinks';

const { Header: AntHeader } = Layout;
const { Link } = Typography;

export const Header = () => {
  return (
    <AntHeader>
      <div className="header-links">
        <Link href="/">Home</Link>
        <Link href={socialLinks.soundcloud} target="_blank">SoundCloud</Link>
        <Link href={socialLinks.instagram} target="_blank">Instagram</Link>
        <Link href={socialLinks.bluesky} target="_blank">Bluesky</Link>
      </div>
    </AntHeader>
  );
};