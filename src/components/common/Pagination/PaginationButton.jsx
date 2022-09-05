import React from 'react';
import * as Styled from '@/components/common/Pagination/Pagination.styled';

const PaginationButton = ({ itemsPerPage, totalItemNumber, page, paginate }) => {
  const totalPages = Math.ceil(totalItemNumber / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    if (number <= 0 || number > totalPages) {
      return;
    }
    paginate(number);
  };

  return (
    <Styled.PaginationButtonContainer>
      <Styled.PaginationButton
        disabled={page === 1 ? true : false}
        onClick={() => {
          handlePageClick(page - 1);
        }}
      >
        prev
      </Styled.PaginationButton>
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
      <Styled.PaginationButton
        disabled={page === totalPages ? true : false}
        onClick={() => {
          handlePageClick(page + 1);
        }}
      >
        next
      </Styled.PaginationButton>
    </Styled.PaginationButtonContainer>
  );
};

export default PaginationButton;
