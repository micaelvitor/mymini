// src/components/Footer.tsx
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  return (
    <AntFooter>
      <Text>
        {new Date().getFullYear()} -{' '}
        <a href="https://www.razordies.com.br" target="_blank" rel="noopener noreferrer">
          www.razordies.com.br
        </a>
      </Text>
      <br />
      <Text>
        Crafted with <a href="https://atproto.com/" target="_blank" rel="noopener noreferrer">Atmosphere</a>
      </Text>
    </AntFooter>
  );
};