import React from 'react';
import ProductListItem from '@/components/ProductList/ProductListItem';
import * as Styled from '@/components/ProductList/ProductList.styled';
import logo from '@/assets/images/logo.png';

const ProductList = ({ data, totalItemNumber }) => {
  return (
    <Styled.ProductList>
      <Styled.StoreDescription>
        <img src={logo} alt="로고" />
        <h2>프루떼 [수확 배송]</h2>
        <p>친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어</p>
        <p>가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.</p>
        <p>
          FRUITTE STORE <span>{totalItemNumber}</span>
        </p>
      </Styled.StoreDescription>
      {data.map(item => {
        return <ProductListItem key={`${item.id + item.Name}`} item={item} />;
      })}
    </Styled.ProductList>
  );
};

export default ProductList;
