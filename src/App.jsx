import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import ItemList from '@/pages/ItemList/ItemList';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<ItemList />} />
    </Routes>
  </div>
);

export default App;
