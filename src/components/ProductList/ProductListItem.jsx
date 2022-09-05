import React, { useState } from 'react';
import * as Styled from '@/components/ProductList/ProductList.styled';
import likeIcon from '@/assets/svg/like.svg';
import clickedLikeIcon from '@/assets/svg/clicked-like.svg';
import { ROUTES } from '@/constants/route';

const ItemListItem = ({ item }) => {
  const { imageUrl, name, description, price, discountRate, isLiked, id } = item;

  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(isLiked);

  const handleLikeButtonClick = () => setIsLikeButtonClicked(!isLikeButtonClicked);

  return (
    <Styled.Product>
      <Styled.ProductImageContainer>
        <Styled.ProductImage src={imageUrl} alt="상품" />
        {isLikeButtonClicked ? (
          <img src={clickedLikeIcon} alt="좋아요 클릭한 아이콘" onClick={handleLikeButtonClick} />
        ) : (
          <img src={likeIcon} alt="좋아요 클릭 전 아이콘" onClick={handleLikeButtonClick} />
        )}
      </Styled.ProductImageContainer>
      <Styled.ProductInfo to={`${ROUTES.PRODUCTDETAIL}?productId=${id}`}>
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
