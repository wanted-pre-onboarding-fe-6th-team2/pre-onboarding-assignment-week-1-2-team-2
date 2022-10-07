import React, { useState, cloneElement } from 'react';
import PaginationButton from '@/components/common/Pagination/PaginationButton';
import * as Styled from '@/components/common/Pagination/Pagination.styled';

const Pagination = ({ data, children }) => {
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
      {cloneElement(children, {
        data: currentItems(data),
        page: currentPage,
        totalItemNumber: data.length,
      })}
      <PaginationButton
        itemsPerPage={itemsPerPage}
        totalItemNumber={data.length}
        page={currentPage}
        paginate={setCurrentPage}
      />
    </Styled.PaginationSection>
  );
};

export default Pagination;
