import React from 'react';
import ItemItem from '@/components/ItemList/ItemListItem';
import * as Styled from '@/components/ItemList/ItemList.styled';

const ItemList = ({ data }) => {
  return (
    <Styled.ItemList>
      {data.map(item => {
        return <ItemItem key={`${item.id + item.Name}`} item={item} />;
      })}
    </Styled.ItemList>
  );
};

export default ItemList;
