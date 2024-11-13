// src/components/BlogPosts.tsx
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

type Post = {
  title: string;
  date: string;
  link: string;
};

interface BlogPostsProps {
  posts: Post[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div>
      <Title level={3} style={{ textAlign: 'center', color: '#3e71be' }}>Music, T.I Stuff, Desabafos</Title>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '24px', color: '#fff' }}>Blog Posts</Title>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        style={{ padding: '0 16px' }}
        renderItem={(post) => (
          <List.Item style={{ padding: '8px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Link to={post.link} style={{ fontSize: '1.1rem', color: '#fff' }}>{post.title}</Link>
              <Text type="secondary" style={{ fontSize: '0.9rem', color: '#fff', marginLeft: '16px' }}>{post.date}</Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogPosts;