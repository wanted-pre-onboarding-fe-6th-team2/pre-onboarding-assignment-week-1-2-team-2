import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ProductDetail from '@/components/ProductDetail/ProductDetail';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail" element={<ProductDetail />} />
    </Routes>
  </div>
);

export default App;
