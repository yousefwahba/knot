import Layout from './components/shared/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/test" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
