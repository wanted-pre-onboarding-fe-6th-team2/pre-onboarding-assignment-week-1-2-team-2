import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PaymentMethodSection = styled.section`
  margin-top: 60px;
`;

const PaymentMethodSelectSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PaymentMethodSelectTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 103px;
`;

const PaymentMethodList = styled.ul`
  display: flex;
`;

const PaymentMethodSelectButton = styled.button`
  ${({ isCurrentPaymentMethod }) => css`
    font-size: 14px;
    width: 138px;
    height: 48px;
    background: ${isCurrentPaymentMethod ? '#4c9c2e' : 'transparent'};
    color: ${isCurrentPaymentMethod ? '#fff' : '#000'};
    border: 1px solid rgb(226, 226, 226);
    border-radius: 3px;
    cursor: pointer;
  `}
`;

export {
  PaymentMethodSection,
  PaymentMethodSelectSection,
  PaymentMethodSelectTitle,
  PaymentMethodList,
  PaymentMethodSelectButton,
};
