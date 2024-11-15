// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import './styles/global.scss';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header />
        <Content className="ant-layout-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
          </Routes>
        </Content>

        <Footer />
      </Layout>
    </Router>
  );
};

export default App;