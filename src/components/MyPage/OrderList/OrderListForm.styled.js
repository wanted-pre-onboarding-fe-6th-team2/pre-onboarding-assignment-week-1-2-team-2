import styled from '@emotion/styled';

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: rgb(51, 51, 51);
  border-bottom: 2px solid rgb(51, 51, 51);
  padding: 20px 0;
  letter-spacing: -0.5px;
`;
const OrderContainer = styled.div`
  border-bottom: 1px solid #333;
  padding: 16px 20px;
`;
const NoData = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export { OrderContainer, Title, NoData };
