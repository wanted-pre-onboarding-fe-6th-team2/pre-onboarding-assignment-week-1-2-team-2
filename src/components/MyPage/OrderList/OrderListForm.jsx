import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from '@/components/MyPage/OrderList/OrderListForm.styled';
import OrderItem from '@/components/MyPage/OrderItem/OrderItem';

export default function OrderListForm() {
  const order = useSelector(state => state.order);
  return (
    <>
      <Styled.Title>주문 내역</Styled.Title>
      <Styled.OrderContainer>
        {order.length > 0 ? (
          order.map((item, idx) => (
            <OrderItem
              key={idx}
              id={item.id}
              option={item.option}
              quantity={item.option.quantity}
            />
          ))
        ) : (
          <Styled.NoData>주문한 상품 내역이 없습니다.</Styled.NoData>
        )}
      </Styled.OrderContainer>
    </>
  );
}
