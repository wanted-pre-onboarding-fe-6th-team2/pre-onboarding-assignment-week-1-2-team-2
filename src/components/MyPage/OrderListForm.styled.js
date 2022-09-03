import styled from '@emotion/styled';

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);
  border-bottom: 2px solid rgb(51, 51, 51);
  padding: 30px 0;
`;
const OrderRow = styled.div`
  padding: 16px 20px;
  margin-bottom: 14px;
`;
const OrderDate = styled.p`
  border-bottom: 1px solid rgb(221, 223, 225);
`;
const OrderItem = styled.div`
  display: flex;
`;
const OrderImageWrapper = styled.div`
  width: 60px;
  height: 78px;
  margin-right: 20px;
`;
const OrderImage = styled.img`
  object-fit: Container;
`;
const OrderInfo = styled.div``;
const OrderProductName = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`;
const OrderOption = styled.p``;
const OrderQuantity = styled.span``;
const OrderPrice = styled.span``;
const OrderState = styled.div``;

export {
  OrderRow,
  OrderImageWrapper,
  OrderImage,
  OrderInfo,
  OrderProductName,
  OrderOption,
  OrderQuantity,
  OrderPrice,
  OrderState,
  Title,
  OrderDate,
  OrderItem,
};
