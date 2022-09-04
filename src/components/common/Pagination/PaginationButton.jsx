import React from 'react';
import * as Styled from '@/components/common/Pagination/Pagination.styled';

const PaginationButton = ({ itemsPerPage, totalItemNumber, page, paginate }) => {
  const totalPages = Math.ceil(totalItemNumber / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    if (number <= 0) {
      alert('첫번째 페이지입니다.');
      return;
    } else if (number > totalPages) {
      alert('마지막 페이지입니다.');
      return;
    }

    paginate(number);
  };

  // TODO : 10개 이상의 page가 존재하는 경우에 처리하기
  return (
    <Styled.PaginationButtonContainer>
      <Styled.PaginationButton
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
