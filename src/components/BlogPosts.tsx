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
    <div className="blog-posts">
      <Title level={3} className="blog-title">Music, T.I Stuff, Desabafos</Title>
      <Title level={3} className="blog-sub-tittle">Blog Posts</Title>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item className="post-item">
            <div>
              <Link to={post.link}>{post.title}</Link>
              <Text className="post-date">{post.date}</Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogPosts;