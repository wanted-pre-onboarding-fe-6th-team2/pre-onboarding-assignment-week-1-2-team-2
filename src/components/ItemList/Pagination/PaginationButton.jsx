import React from 'react';

const PaginationButton = ({ itemsPerPage, totalItem, paginate }) => {
  const totalPages = Math.ceil(totalItem / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = number => {
    paginate(number);
  };

  return (
    <div>
      <button>prev</button>
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => {
            handlePageClick(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      ))}
      <button>next</button>
    </div>
  );
};

export default PaginationButton;
