import OrdererInfo from '@/components/order/OrdererInfo/OrdererInfo';
import OrderList from '@/components/order/OrderList/OrderList';
import ShippingInfo from '@/components/order/ShippingInfo/ShippingInfo';
import * as Styled from '@/pages/Order/Order.styled';

const Order = () => {
  return (
    <Styled.PageContainer>
      <Styled.OrderPageHeading>주문서</Styled.OrderPageHeading>
      <OrderList />
      <OrdererInfo />
      <ShippingInfo />
    </Styled.PageContainer>
  );
};

export default Order;
