import React from 'react';
import * as Styled from '@/components/MyPage/OrderListForm.styled';

export default function OrderListForm() {
  return (
    <>
      <Styled.Title>주문 내역</Styled.Title>
      <Styled.OrderRow>
        <Styled.OrderDate>2022.08.11</Styled.OrderDate>
        <Styled.OrderItem>
          <Styled.OrderFlex>
            <Styled.OrderImageWrapper>
              <Styled.OrderImage src="https://cdn.imweb.me/thumbnail/20220622/24231acb3b26d.jpg" />
            </Styled.OrderImageWrapper>
            <Styled.OrderInfo>
              <Styled.OrderProductName>
                무농약 GAP 인증 국산 청양 블루베리 2kg, 4kg, 5kg
              </Styled.OrderProductName>
              <Styled.OrderOption>2kg</Styled.OrderOption>
              <Styled.OrderFlex>
                <Styled.OrderPrice>52,000원</Styled.OrderPrice>
                <Styled.OrderQuantity>1개</Styled.OrderQuantity>
              </Styled.OrderFlex>
            </Styled.OrderInfo>
          </Styled.OrderFlex>
          <Styled.OrderState>주문완료</Styled.OrderState>
        </Styled.OrderItem>
      </Styled.OrderRow>

      <Styled.OrderRow>
        <Styled.OrderDate>2022.08.11</Styled.OrderDate>
        <Styled.OrderItem>
          <Styled.OrderFlex>
            <Styled.OrderImageWrapper>
              <Styled.OrderImage src="https://cdn.imweb.me/thumbnail/20220622/24231acb3b26d.jpg" />
            </Styled.OrderImageWrapper>
            <Styled.OrderInfo>
              <Styled.OrderProductName>
                무농약 GAP 인증 국산 청양 블루베리 2kg, 4kg, 5kg
              </Styled.OrderProductName>
              <Styled.OrderOption>2kg</Styled.OrderOption>
              <Styled.OrderFlex>
                <Styled.OrderPrice>52,000원</Styled.OrderPrice>
                <Styled.OrderQuantity>1개</Styled.OrderQuantity>
              </Styled.OrderFlex>
            </Styled.OrderInfo>
          </Styled.OrderFlex>
          <Styled.OrderState>주문완료</Styled.OrderState>
        </Styled.OrderItem>
      </Styled.OrderRow>
    </>
  );
}
