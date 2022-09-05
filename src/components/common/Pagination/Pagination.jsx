import React, { useState, Children, isValidElement, cloneElement } from 'react';
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

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        data: currentItems(data),
        page: currentPage,
        totalItemNumber: data.length,
      });
    }
    return child;
  });

  return (
    <Styled.PaginationSection>
      {childrenWithProps}
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
