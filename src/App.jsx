import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ProductList from '@/pages/ProductList/ProductList';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
  </div>
);

export default App;
