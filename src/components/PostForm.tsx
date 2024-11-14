import React, { useState } from "react";
import { Button, Input, Modal } from 'antd';
import { Post } from "@/types/";
import TextArea from "antd/es/input/TextArea";
import { FormOutlined } from "@ant-design/icons";

interface PostFormProps {
  onSubmit: (post: Omit<Post, "id" | "createdAt">) => void;
  initialData?: Omit<Post, "id" | "createdAt">;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
      setOpen(true)
  }

  const handleOk = () => {
    setConfirmLoading(true);
    onSubmit({ title, content });
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
    <Button type="primary" onClick={showModal}>
        Criar nova postagem
    </Button>
    <Modal
        title="Nova postagem"
        animation={true}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
    >
    <Input size="large" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} style={{ marginBottom: '16px' }} prefix={<FormOutlined />} />
    <TextArea rows={4} placeholder="Conte-nos sua história!" value={content} onChange={(e) => setContent(e.target.value)} maxLength={500} />
    </Modal>
  </>
  );
};

export default PostForm;


