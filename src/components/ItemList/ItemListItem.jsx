import React from 'react';
import * as Styled from '@/components/ItemList/ItemList.styled';

const ItemItem = ({ item }) => {
  const { imageUrl, Name, price, discountRate } = item;

  return (
    <Styled.Item>
      <Styled.ItemImageContainer>
        <Styled.ItemImage src={imageUrl} alt="추천 상품" />
      </Styled.ItemImageContainer>
      <Styled.ItemName>{Name}</Styled.ItemName>
      <p>
        <span>{discountRate}</span>
        2,890원
      </p>
      <Styled.ItemPrice>{price}원</Styled.ItemPrice>
    </Styled.Item>
  );
};

export default ItemItem;
