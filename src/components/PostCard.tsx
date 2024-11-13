import { Card, Button } from 'antd';

interface PostCardProps {
  title: string;
  description: string;
  date: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, description, date }) => {
  return (
    <Card title={title} extra={date} style={{ marginBottom: '16px' }}>
      <p>{description}</p>
      <Button type="primary">Read More</Button>
    </Card>
  );
};
