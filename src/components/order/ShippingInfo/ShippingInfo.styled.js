import styled from '@emotion/styled';

const ShippingInfoSection = styled.section`
  margin-top: 60px;
`;

const ShippingInfoForm = styled.form`
  padding: 20px 0;
`;

const ShippingInfoInput = styled.input`
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

const ShippingInfoFormInputWrapper = styled.div`
  margin-bottom: 16px; ;
`;

const ShippingInfoLabel = styled.label`
  display: inline-block;
  width: 160px;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 500;
`;

const AddressSearchButton = styled.button`
  background: rgb(242, 242, 242);
  margin-left: 16px;
  padding: 10px 30px;
  border: 1px solid #ddd;
  font-weight: 500;
`;

const AddressInfoInput = styled.input`
  width: 400px;
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
  ShippingInfoSection,
  ShippingInfoForm,
  ShippingInfoFormInputWrapper,
  ShippingInfoLabel,
  AddressSearchButton,
  ShippingInfoInput,
  AddressInfoInput,
};
