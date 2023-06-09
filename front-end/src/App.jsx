import Layout from './components/shared/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
