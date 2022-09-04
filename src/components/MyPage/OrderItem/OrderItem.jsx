import React from 'react';
import * as Styled from '@/components/MyPage/OrderItem/OrderItem.styled';
import { useSelector } from 'react-redux';

export default function OrderItem({ id, quantity, option }) {
  const product = useSelector(state => state.product);
  const orderProduct = product.filter(item => item.id === id);

  const OptionList = ({ id, quantity, itemIdx }) => {
    const option = orderProduct[itemIdx].option.filter(opt => opt.optionId === id)[0];
    return (
      <Styled.OrderFlex>
        <Styled.OrderOption>{option.optionName}</Styled.OrderOption>
        <Styled.OrderQuantity>{quantity}개</Styled.OrderQuantity>
      </Styled.OrderFlex>
    );
  };

  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return orderProduct.map((item, idx) => (
    <Styled.OrderRow key={item.Name}>
      <Styled.OrderDate>주문번호</Styled.OrderDate>
      <Styled.OrderItem>
        <Styled.OrderFlex>
          <Styled.OrderImageWrapper>
            <Styled.OrderImage src={item.iamgeUrl} />
          </Styled.OrderImageWrapper>
          <Styled.OrderInfo>
            <Styled.OrderProductName>{item.Name}</Styled.OrderProductName>
            {option.map(opt => (
              <OptionList
                key={opt.optionId}
                id={opt.optionId}
                itemIdx={idx}
                quantity={opt.quantity}
              />
            ))}
            <Styled.OrderPrice>{formatPrice(item.price)}원</Styled.OrderPrice>
          </Styled.OrderInfo>
        </Styled.OrderFlex>
        <Styled.OrderState>주문완료</Styled.OrderState>
      </Styled.OrderItem>
    </Styled.OrderRow>
  ));
}
