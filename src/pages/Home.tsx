// src/pages/Home.tsx
import { Layout } from 'antd';
import ProfileSection from '../components/ProfileSection';
import BlogPosts from '../components/BlogPosts';

const { Content } = Layout;

const Home = () => {
  const posts = [
    { title: 'O que é um Atprotocol?', date: '07/07/24', link: '/posts/react-native-ci-cd' },
    { title: 'Vamo parar de iventar moda, a arte do arroz com feijão', date: '04/15/24', link: '/posts/selectable-text' },
    { title: 'Todo DJ iniciante não pode apetar o botão de SYNC (entenda)', date: '04/15/24', link: '/posts/atprotocol-blog' }
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