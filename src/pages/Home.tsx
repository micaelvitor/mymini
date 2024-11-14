// src/pages/Home.tsx
import { Layout } from 'antd';
import ProfileSection from '../components/ProfileSection';
import BlogPosts from '../components/BlogPosts';

const { Content } = Layout;

const Home = () => {
  return (
    <Content>
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        <ProfileSection />
        <BlogPosts />
      </div>
    </Content>
  );
};

export default Home;