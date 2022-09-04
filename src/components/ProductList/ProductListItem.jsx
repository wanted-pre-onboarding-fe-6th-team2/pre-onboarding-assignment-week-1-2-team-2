import React from 'react';
import * as Styled from '@/components/ProductList/ProductList.styled';

const ItemListItem = ({ item }) => {
  const { imageUrl, name, description, price, discountRate } = item;

  return (
    <Styled.Product>
      <Styled.ProductImageContainer>
        <Styled.ProductImage src={imageUrl} alt="상품" />
      </Styled.ProductImageContainer>
      <Styled.ProductInfo>
        <Styled.ProductName>{name}</Styled.ProductName>
        <Styled.ProductDescription>{description}</Styled.ProductDescription>
        {discountRate === 0 ? (
          <Styled.ProductDiscountPrice>{price}원</Styled.ProductDiscountPrice>
        ) : (
          <>
            <Styled.ProductDiscountPrice>
              <Styled.ProductDiscountRate>{discountRate}%</Styled.ProductDiscountRate>
              {(price * (100 - discountRate)) / 100}원
            </Styled.ProductDiscountPrice>
            <Styled.ProductPrice>{price}원</Styled.ProductPrice>
          </>
        )}
      </Styled.ProductInfo>
    </Styled.Product>
  );
};

export default ItemListItem;
