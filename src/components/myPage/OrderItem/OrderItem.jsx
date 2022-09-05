import React, { useRef } from 'react';
import * as Styled from '@/components/myPage/OrderItem/OrderItem.styled';
import { useSelector } from 'react-redux';

export default function OrderItem({ orderNumber, productId, option }) {
  const products = useSelector(state => state.product);
  const orderProduct = products.filter(item => item.id === productId);
  const optionPrice = useRef([]);

  const OptionList = ({ id, quantity, itemIdx, index }) => {
    const options = orderProduct[itemIdx].option.filter(option => option.optionId === id)[0];
    optionPrice.current[index] = options.optionPrice * quantity;
    return (
      <Styled.OrderFlex>
        <Styled.OrderOption>{options.optionName}</Styled.OrderOption>
        <Styled.OrderQuantity>{quantity}개</Styled.OrderQuantity>
      </Styled.OrderFlex>
    );
  };

  // 금액 천단위(3자리) 콤마 처리
  const FormatTotalPrice = () => {
    const totalPrice = optionPrice.current.reduce((a, b) => a + b);
    return Number(totalPrice).toLocaleString('en');
  };

  const formatOrderNumber = idx => {
    return String(idx).padStart(5, '0');
  };

  return orderProduct.map((item, idx) => (
    <Styled.OrderRow key={idx}>
      <Styled.OrderDate>{formatOrderNumber(idx + 1)}</Styled.OrderDate>
      <Styled.OrderItem>
        <Styled.OrderFlex>
          <Styled.OrderImageWrapper>
            <Styled.OrderImage src={item.imageUrl} />
          </Styled.OrderImageWrapper>
          <div>
            <Styled.OrderProductName>{item.name}</Styled.OrderProductName>
            {option.map((option, index) => (
              <OptionList
                key={index}
                index={index}
                id={option.optionId}
                itemIdx={idx}
                quantity={option.quantity}
              />
            ))}
            <Styled.OrderPrice>
              <FormatTotalPrice />원
            </Styled.OrderPrice>
          </div>
        </Styled.OrderFlex>
        <Styled.OrderState>주문완료</Styled.OrderState>
      </Styled.OrderItem>
    </Styled.OrderRow>
  ));
}
