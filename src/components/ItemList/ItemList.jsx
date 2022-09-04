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
      </div>
      {data.map(item => {
        return <ItemItem key={`${item.id + item.Name}`} item={item} />;
      })}
    </Styled.ItemList>
  );
};

export default ItemList;
