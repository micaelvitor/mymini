// src/components/BlogPosts.tsx
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { Post } from '@/types';
import { useState } from 'react';

const { Title, Text } = Typography;

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Omit<Post, "id" | "createdAt">) => {
    const newPost = {
      ...post,
      id: (posts.length + 1).toString(),
      createdAt: new Date().toISOString(),
    }
    setPosts([...posts, newPost]);
  }

  return (
    <div className="blog-posts">
      <Title style={{color: '#7D98C3', textAlign: 'center', marginBottom: '24px'}} level={1}>Blog Posts
        <div style={{ marginTop: '24px' }}>
          <PostForm onSubmit={handleAddPost} />
        </div>

      </Title>
      

      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <Title style={{color: '#7D98C3'}} level={3}>{post.title}</Title>
            <Text style={{color: '#94AACD', fontSize: '20px'}}>{post.content}</Text>
            <br />
            <Text style={{color: '#94AACD', fontSize: '14px'}} type="secondary">{new Date(post.createdAt).toLocaleString()}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;