import styled from '@emotion/styled';

const PageContainer = styled.main`
  width: 1050px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const OrderPageHeading = styled.h2`
  padding: 0 0 48px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;

const FlexBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export { PageContainer, OrderPageHeading, FlexBox };
