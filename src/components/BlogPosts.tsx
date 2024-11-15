import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style/BlogPosts.module.scss';

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
    <div className={styles["blog-posts"]}>
      <Title level={3} className={styles["blog-sub-title"]}>Blog Posts</Title>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item className={styles["post-item"]}>
            <div>
              <Link to={post.link}>{post.title}</Link>
              <Text className={styles["post-date"]}>{post.date}</Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogPosts;