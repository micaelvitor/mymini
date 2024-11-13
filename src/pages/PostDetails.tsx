// src/pages/PostDetails.tsx
import { useParams } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const PostDetails = () => {
  const { postId } = useParams();

  return (
    <Content style={{ padding: '24px', backgroundColor: '#1f2f47' }}>
      <Title style={{ color: '#fff' }}>Post Details - {postId}</Title>
      <Paragraph style={{ color: '#fff' }}>Conteúdo detalhado do post aqui...</Paragraph>
    </Content>
  );
};

export default PostDetails;