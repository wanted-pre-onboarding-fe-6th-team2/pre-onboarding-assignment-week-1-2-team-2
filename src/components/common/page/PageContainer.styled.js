import styled from '@emotion/styled';

const Main = styled.main`
  width: 1050px;
  margin: 0 auto;
  padding: ${props => (props.className === 'space' ? '160px 0px 80px' : '60px 0px 80px')};
  min-height: calc(100vh - 200px);
  box-sizing: border-box;
`;

export { Main };
