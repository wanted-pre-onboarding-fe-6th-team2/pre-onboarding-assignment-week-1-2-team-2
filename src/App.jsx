import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants/route';
import ProductList from '@/pages/ProductList/ProductList';
import ProductDetail from '@/pages/ProductDetail/ProductDetail';
import OrderList from '@/pages/MyPage/OrderList';
import Order from '@/pages/Order/Order';
import ProductRegisterPage from '@/pages/Admin/ProductRegisterPage';
import ProductListPage from '@/pages/Admin/ProductListPage';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<ProductList />} />
      <Route path={ROUTES.PRODUCTLIST} element={<ProductList />} />
      <Route path={ROUTES.PRODUCTDETAIL} element={<ProductDetail />}>
        <Route path={ROUTES.ORDER} element={<Order />} />
      </Route>

      <Route path={ROUTES.ORDERLIST} element={<OrderList />} />
      <Route path={ROUTES.ADMIN} element={<ProductListPage />} />
      <Route path={ROUTES.ADMINREGISTER} element={<ProductRegisterPage />} />
      <Route path={'*'} element={<Navigate to="/"></Navigate>} />
    </Routes>
  </div>
);

export default App;
