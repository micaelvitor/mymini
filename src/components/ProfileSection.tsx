import { Avatar, Typography } from 'antd';

const { Title } = Typography;

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <Avatar size={100} src="/profile.jpg" alt="Razordies Avatar" />
      <div>
        <Title level={1} className="profile-title">It's RazorDies! 🎧</Title>
        <Title level={3} className="blog-title">Music, I.T Stuff, Shitpost</Title>
      </div>
    </div>
  );
};

export default ProfileSection;
