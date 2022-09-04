import styled from '@emotion/styled';

const PaymentAgreementSection = styled.section`
  margin-top: 60px;
`;

const PaymentAgreementCheckbox = styled.input`
  margin: 0 20px 0 0;
  width: 18px;
  height: 18px;
  accent-color: #4c9c2e;
  vertical-align: middle;
`;

const PaymentAgreementLabel = styled.label`
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
`;

const OrderButton = styled.button`
  display: block;
  margin: 60px auto;
  padding: 18px 10px;
  width: 240px;
  background: #4c9c2e;
  border: 0;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

export { PaymentAgreementSection, PaymentAgreementCheckbox, PaymentAgreementLabel, OrderButton };
