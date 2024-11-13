// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;