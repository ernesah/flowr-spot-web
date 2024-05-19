import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContextProvider from './store/auth-context';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
