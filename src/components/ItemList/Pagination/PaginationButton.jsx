import React from 'react';
import * as Styled from '@/components/ItemList/Pagination/Pagination.styled';

const PaginationButton = ({ itemsPerPage, totalItem, paginate }) => {
  const totalPages = Math.ceil(totalItem / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    paginate(number);
  };

  return (
    <Styled.PaginationButtonContainer>
      <Styled.PaginationButton>prev</Styled.PaginationButton>
      {pageNumbers.map((pageNumber, index) => (
        <Styled.PaginationButton
          key={index}
          onClick={() => {
            handlePageClick(pageNumber);
          }}
        >
          {pageNumber}
        </Styled.PaginationButton>
      ))}
      <Styled.PaginationButton>next</Styled.PaginationButton>
    </Styled.PaginationButtonContainer>
  );
};

export default PaginationButton;
