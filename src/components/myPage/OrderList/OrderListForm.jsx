import { useSelector } from 'react-redux';
import * as Styled from '@/components/myPage/orderList/OrderListForm.styled';
import OrderItem from '@/components/myPage/OrderItem/OrderItem';

export default function OrderListForm() {
  const orderList = useSelector(state => state.order);
  return (
    <>
      <Styled.Title>주문 내역</Styled.Title>
      <Styled.OrderContainer>
        {orderList.length > 0 ? (
          orderList.map((item, idx) => (
            <OrderItem key={idx} orderNumber={idx} productId={item.id} option={item.option} />
          ))
        ) : (
          <Styled.NoData>주문한 상품 내역이 없습니다.</Styled.NoData>
        )}
      </Styled.OrderContainer>
    </>
  );
}
