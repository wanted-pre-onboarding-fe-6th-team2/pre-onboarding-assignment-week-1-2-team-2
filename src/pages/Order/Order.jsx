import OrderList from '@/components/order/OrderList/OrderList';
import * as Styled from '@/pages/Order/Order.styled';

const Order = () => {
  return (
    <Styled.PageContainer>
      <Styled.OrderPageHeading>주문서</Styled.OrderPageHeading>
      <OrderList />
    </Styled.PageContainer>
  );
};

export default Order;
