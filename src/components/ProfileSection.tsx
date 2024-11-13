import { Avatar, Typography } from 'antd';

const { Title } = Typography;

const ProfileSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
      <Avatar size={80} src="/profile.jpg" alt="Razordies Avatar" />
      <div style={{ marginLeft: '24px', textAlign: 'center' }}>
        <Title level={1} style={{ color: '#fff' }}>It's RazorDies! 🎧</Title>
      </div>
    </div>
  );
};

export default ProfileSection;