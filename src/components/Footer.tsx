import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center', borderTop: '1px solid #202023', backgroundColor: '#1f2f47' }}>
      <Text style={{ color: '#ddd' }}>
        {' '}
        {new Date().getFullYear()} -{' '}
        <a href="https://www.razordies.com.br" target="_blank" rel="noopener noreferrer">
          www.razordies.com.br
        </a>
      </Text>
      <br />
      <Text style={{ color: '#ddd' }}>
        Crafted with <a href="https://atproto.com/" target="_blank" rel="noopener noreferrer">Atmosphere</a>
      </Text>
    </AntFooter>
  );
};