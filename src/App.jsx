import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ProductRegisterPage from '@/pages/Admin/ProductRegisterPage';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/register" element={<ProductRegisterPage />} />
    </Routes>
  </div>
);

export default App;
