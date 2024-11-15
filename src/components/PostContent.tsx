import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './style/PostContent.module.scss';

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className={styles['post-content']}>
      <ReactMarkdown className={styles['markdown-content']}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;