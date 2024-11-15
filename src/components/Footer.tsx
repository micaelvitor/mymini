import { Layout, Typography } from 'antd';
import styles from './style/Footer.module.scss';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  return (
    <AntFooter className={styles["ant-layout-footer"]}>
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