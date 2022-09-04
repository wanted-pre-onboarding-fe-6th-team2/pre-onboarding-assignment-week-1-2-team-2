import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ProductListPage from './pages/Admin/ProductListPage';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<ProductListPage />} />
    </Routes>
  </div>
);

export default App;
