import React from 'react';
import * as Styled from '@/components/MyPage/OrderListForm.styled';

export default function OrderListForm() {
  return (
    <>
      <Styled.Title>주문내역</Styled.Title>
      <Styled.OrderRow>
        <Styled.OrderDate>2022.08.11</Styled.OrderDate>
        <Styled.OrderItem>
          <Styled.OrderImageWrapper>
            <Styled.OrderImage />
          </Styled.OrderImageWrapper>
          <Styled.OrderInfo>
            <Styled.OrderProductName>Title</Styled.OrderProductName>
            <Styled.OrderOption>[옵션]</Styled.OrderOption>
            <Styled.OrderPrice>7,920</Styled.OrderPrice>
            <Styled.OrderQuantity>1개</Styled.OrderQuantity>
          </Styled.OrderInfo>
          <Styled.OrderState>주문완료</Styled.OrderState>
        </Styled.OrderItem>
      </Styled.OrderRow>
    </>
  );
}
