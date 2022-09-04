import styled from '@emotion/styled';

const OrderRow = styled.div`
  margin-bottom: 14px;

  & + & {
    border-top: 1px solid #333;
  }
`;
const OrderDate = styled.p`
  border-bottom: 1px solid rgb(221, 223, 225);
  padding: 8px 0px 13px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.43px;
`;
const OrderItem = styled.div`
  display: flex;
  padding: 14px 0px 16px;
  justify-content: space-between;
  align-items: center;
`;
const OrderImageWrapper = styled.div`
  width: 70px;
  margin-right: 20px;
`;
const OrderImage = styled.img`
  width: 100%;
  border: 1px solid #f5f5f5;
`;
const OrderInfo = styled.div``;
const OrderProductName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  margin-bottom: 8px;
  padding-bottom: 2px;
  letter-spacing: -0.22px;
`;
const OrderOption = styled.span`
  line-height: 1.43;
  color: rgb(153, 153, 153);
`;
const OrderFlex = styled.div`
  display: flex;
  align-items: center;
`;
const OrderQuantity = styled.span`
  letter-spacing: -0.22px;
  color: rgb(153, 153, 153);
  &:before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 10px;
    background: rgba(211, 211, 211);
    margin: 0 10px;
  }
`;
const OrderPrice = styled.p`
  margin-right: 6px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 8px;
`;
const OrderState = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  color: rgb(51, 51, 51);
  letter-spacing: -0.3px;
`;

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
  OrderDate,
  OrderItem,
  OrderFlex,
};
