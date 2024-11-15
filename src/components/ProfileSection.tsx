import { Avatar, Typography } from 'antd';
import styles from './style/ProfileSection.module.scss';
const { Title } = Typography;

const ProfileSection = () => {
  return (
    <div className={styles["profile-section"]}>
      <Avatar size={100} src="/profile.jpg" alt="Razordies Avatar" />
      <div>
        <Title level={1} className={styles["profile-title"]}>It's RazorDies! 🎧</Title>
        <Title level={3} className={styles["blog-title"]}>Music, I.T Stuff, Shitpost</Title>
      </div>
    </div>
  );
};

export default ProfileSection;
