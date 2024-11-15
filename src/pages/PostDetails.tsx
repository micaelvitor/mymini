// src/pages/PostDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent';

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  // Mock de conteúdo Markdown
  const postContent = `
# Introdução ao Markdown

Markdown é uma linguagem de marcação simples que permite formatar texto de forma rápida e prática. Abaixo estão alguns exemplos de conteúdo que você pode adicionar.

### Imagem de Exemplo
![Imagem de Exemplo](https://via.placeholder.com/600x200)

### Exemplo de Código

\`\`\`javascript
// Função para somar dois números
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // Output: 8
\`\`\`

Markdown permite adicionar **texto em negrito**, _itálico_, listas e muito mais.
  `;


  return (
    <PostContent content={postContent}/>
  );
};

export default PostDetails;