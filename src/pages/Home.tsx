// src/pages/Home.tsx
import { Layout } from 'antd';
import ProfileSection from '../components/ProfileSection';
import BlogPosts from '../components/BlogPosts';

const { Content } = Layout;

const Home = () => {
  const posts = [
    { title: 'Como eu estou usando o AtProtocol', date: '07/07/24', link: '/posts/react-native-ci-cd' },
    { title: 'O que musica tem haver com programar', date: '04/15/24', link: '/posts/selectable-text' },
    { title: 'Ter TDH pode ser uma vantagem (sem meme)', date: '04/15/24', link: '/posts/atprotocol-blog' }
  ];

  return (
    <Content>
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <ProfileSection />
        <BlogPosts posts={posts} />
      </div>
    </Content>
  );
};

export default Home;