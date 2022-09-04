import React, { useState } from 'react';
import ItemList from '@/components/ItemList/ItemList';
import PaginationButton from '@/components/Pagination/PaginationButton';
import * as Styled from '@/components/Pagination/Pagination.styled';

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentItems = items => {
    let currentItems = 0;
    currentItems = items.slice(indexOfFirst, indexOfLast);
    return currentItems;
  };

  return (
    <Styled.PaginationSection>
      <p>
        FRUITTE STORE <span>{data.length}</span>
      </p>
      <ItemList data={currentItems(data)} page={currentPage} />
      <PaginationButton
        itemsPerPage={itemsPerPage}
        totalItem={data.length}
        page={currentPage}
        paginate={setCurrentPage}
      />
    </Styled.PaginationSection>
  );
};

export default Pagination;
