// src/components/ProfileSection.tsx
import { Avatar, Typography } from 'antd';

const { Title } = Typography;

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <Avatar size={100} src="/profile.jpg" alt="Razordies Avatar" />
      <div>
        <Title level={1} className="profile-title">It's RazorDies! 🎧</Title>
      </div>
    </div>
  );
};

export default ProfileSection;