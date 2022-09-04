import React from 'react';
import * as Styled from '@/components/common/Pagination/Pagination.styled';

const PaginationButton = ({ itemsPerPage, totalItemNumber, page, paginate }) => {
  const totalPages = Math.ceil(totalItemNumber / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    paginate(number);
  };

  // TODO : 10개 이상의 page가 존재하는 경우에 처리하기
  return (
    <Styled.PaginationButtonContainer>
      {pageNumbers.length <= 10 &&
        pageNumbers.map((pageNumber, index) => (
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
