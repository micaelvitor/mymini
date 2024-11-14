// src/pages/PostDetails.tsx
import { useParams } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from './PostDetails.module.scss';

const { Content } = Layout;
// const { Title, Paragraph } = Typography;

const PostDetails = () => {
  const { postId } = useParams();

  const mockPost = {
    title: "Entendendo Markdown e Exemplo Completo",
    date: "14/11/2024",
    author: "Alan Feitosa",
    content: `
# Introdução ao Markdown

Markdown é uma linguagem de marcação simples que permite formatar texto de forma rápida e prática. Abaixo estão alguns exemplos de conteúdo que você pode adicionar.

---

### Imagem de Exemplo


---

### Exemplo de Código

\`\`\`javascript
// Função para somar dois números
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3)); // Output: 8
\`\`\`

Markdown permite adicionar **texto em negrito**, _itálico_, listas e muito mais.
    `
  };

  return (
    <Content className={styles["post-details"]}>
      {/* <Title level={2} className={styles["post-title"]}>{mockPost.title} - {postId}</Title> */}
      {/* <Paragraph className={styles["post-meta"]}>
        <strong>By {mockPost.author}</strong> - {mockPost.date}
      </Paragraph> */}
      
      <div className={styles["markdown-content"]}>
        <ReactMarkdown>{mockPost.content}</ReactMarkdown>
      </div>
    </Content>
  );
};

export default PostDetails;