import styled from '@emotion/styled';

const OrdererInfoSection = styled.section`
  margin-top: 60px;
`;

const OrdererInfoForm = styled.form`
  padding: 20px 0;
`;

const OrdererInfoFormInputWrapper = styled.div`
  margin-bottom: 16px; ;
`;

const OrdererInfoLabel = styled.label`
  display: inline-block;
  width: 160px;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 500;
`;

const OrdererInfoInput = styled.input`
  width: 200px;
  height: 44px;
  font-size: 14px;
  padding: 0 14px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  outline: 0;

  &:focus,
  &:hover {
    border: 1px solid black;
  }
`;

export {
  OrdererInfoSection,
  OrdererInfoForm,
  OrdererInfoFormInputWrapper,
  OrdererInfoLabel,
  OrdererInfoInput,
};
