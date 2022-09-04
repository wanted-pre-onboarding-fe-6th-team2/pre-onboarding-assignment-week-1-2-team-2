import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants/route';
import Home from '@/pages/Home/Home';
import OrderList from './pages/myPage/OrderList';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ORDERLIST} element={<OrderList />} />
    </Routes>
  </div>
);

export default App;
