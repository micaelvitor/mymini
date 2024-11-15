import { Layout } from 'antd';
import ProfileSection from '../components/ProfileSection';
import BlogPosts from '../components/BlogPosts';

const Home = () => {
  const posts = [
    {
      title: 'O que é um Atprotocol?',
      date: '07/07/24',
      link: '/posts/react-native-ci-cd',
      description: `# Atprotocol\n\nEste é um exemplo de conteúdo em **markdown** com _suporte para imagens_, texto e links.`,
      imageUrl: 'https://via.placeholder.com/600x200',
      author: 'Alan Feitosa'
    },
  ];
  
  return (
    <div style={{ maxWidth: '900px', width: '100%' }}>
      <ProfileSection />
      <BlogPosts posts={posts} />
    </div>
  );
};

export default Home;