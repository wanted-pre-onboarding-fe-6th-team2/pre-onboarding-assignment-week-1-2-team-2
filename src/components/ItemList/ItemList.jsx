import React from 'react';
import ItemItem from '@/components/ItemList/ItemListItem';
import * as Styled from '@/components/ItemList/ItemList.styled';
import logo from '@/assets/images/logo.png';

const ItemList = ({ data }) => {
  return (
    <Styled.ItemList>
      <div>
        <img src={logo} alt="로고" />
        <h2>프루떼[수확 배송]</h2>
        <p>친환경 농가의 맛있고 바른 먹거리를 만났을 때 게릴라로 열리는 프루떼의 반짝스토어</p>
      </div>
      {data.map(item => {
        return <ItemItem key={`${item.id + item.Name}`} item={item} />;
      })}
    </Styled.ItemList>
  );
};

export default ItemList;
