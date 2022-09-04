import React from 'react';
import * as Styled from '@/components/Pagination/Pagination.styled';

const PaginationButton = ({ itemsPerPage, totalItem, page, paginate }) => {
  const totalPages = Math.ceil(totalItem / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    paginate(number);
  };

  return (
    <Styled.PaginationButtonContainer>
      {pageNumbers.map((pageNumber, index) => (
        <Styled.PaginationButton
          key={index}
          isCurrentPage={page === pageNumber}
          onClick={() => {
            handlePageClick(pageNumber);
          }}
        >
          {pageNumber}
        </Styled.PaginationButton>
      ))}
    </Styled.PaginationButtonContainer>
  );
};

export default PaginationButton;
