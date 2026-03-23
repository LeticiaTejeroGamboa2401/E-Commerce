import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/store/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import NotFound from './pages/NotFound';
import CatalogPage from './pages/store/CatalogPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Ruta principal de la tienda */}
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}/>

        {/* Rutas de Autenticación */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>

        {/* Ruta para manejo de error 404 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
