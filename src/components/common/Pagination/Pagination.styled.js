import styled from '@emotion/styled';

const PaginationSection = styled.section`
  width: 80%;
  margin: 0 auto;
`;

const PaginationButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PaginationButton = styled.button`
  width: 3em;
  height: 3em;
  border: 1px solid rgb(65, 143, 34);
  outline: none;
  box-sizing: border-box;
  background-color: ${props => (props.isCurrentPage ? 'rgba(65, 143, 34, 0.25)' : 'transparent')};

  color: rgb(65, 143, 34);
  font-weight: bold;
  font-size: 1em;
`;

export { PaginationSection, PaginationButtonContainer, PaginationButton };
