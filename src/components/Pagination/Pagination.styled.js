import styled from '@emotion/styled';

const PaginationSection = styled.section`
  width: 80%;
  margin: 0 auto;

  & > p {
    position: absolute;
    top: 38%;
    left: 13%;

    & > span {
      font-weight: bold;
      color: rgb(65, 143, 34);
    }
  }

  @media all and (max-width: 1024px) {
    & > p {
      position: absolute;
      top: 38%;
      left: 16%;
    }
  }

  @media all and (max-width: 768px) {
    & > p {
      position: absolute;
      top: 37%;
      left: 11%;
    }
  }
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
