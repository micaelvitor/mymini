import { Layout, Typography } from 'antd';
const { Header: AntHeader } = Layout;
const { Link } = Typography;

export const Header = () => {
  return (
    <AntHeader
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f2f47',
        padding: '0 24px',
        borderBottom: '1px solid #202023',
      }}
    >
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link href="/" style={{ color: '#fff' }}>Home</Link>
        <Link href="https://soundcloud.com" target="_blank" style={{ color: '#fff' }}>SoundCloud</Link>
        <Link href="https://instagram.com" target="_blank" style={{ color: '#fff' }}>Instagram</Link>
        <Link href="https://bsky.app" target="_blank" style={{ color: '#fff' }}>Bluesky</Link>
      </div>
    </AntHeader>
  );
};
