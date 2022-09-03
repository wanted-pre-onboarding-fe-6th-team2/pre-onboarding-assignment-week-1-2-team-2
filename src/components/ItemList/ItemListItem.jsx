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
      {discountRate === 0 ? (
        <Styled.ItemDiscountPrice>{price}원</Styled.ItemDiscountPrice>
      ) : (
        <>
          <Styled.ItemDiscountPrice>
            <Styled.DiscountRate>{discountRate}%</Styled.DiscountRate>
            {(price * (100 - discountRate)) / 100}원
          </Styled.ItemDiscountPrice>
          <Styled.ItemPrice>{price}원</Styled.ItemPrice>
        </>
      )}
    </Styled.Item>
  );
};

export default ItemItem;
