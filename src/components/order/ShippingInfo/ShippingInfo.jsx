import * as Styled from '@/components/order/ShippingInfo/ShippingInfo.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';

const RECIPIENT_NAME = 'recipient-name';
const RECIPIENT_PHONE_NUMBER = 'recipient-phone-number';
const RECIPIENT_EMAIL = 'recipient-email';

const SHIPPING_ADDRESS = 'shipping-address';
const SHIPPING_ADDRESS_DETAIL = 'shipping-address-detail';

const RecipientInfoFormItems = [
  { label: '수령인', id: RECIPIENT_NAME, inputType: 'text' },
  { label: '연락처', id: RECIPIENT_PHONE_NUMBER, inputType: 'tel' },
  { label: '이메일', id: RECIPIENT_EMAIL, inputType: 'email' },
];

const ShippingInfo = () => {
  const daumPostCodeOpen = useDaumPostcodePopup();
  const [shippingForm, setShippingForm] = useState({
    recipient: '',
    phoneNumber: '',
    email: '',
    address: '',
    addressDetail: '',
  });

  const handleOnCompleteOfDaumPost = ({ address }) => {
    setShippingForm(pre => ({ ...pre, address }));
  };
  return (
    <Styled.ShippingInfoSection>
      <SectionHeading>배송 정보</SectionHeading>
      <Styled.ShippingInfoForm>
        {RecipientInfoFormItems.map(({ id, inputType, label }) => {
          return (
            <Styled.ShippingInfoFormInputWrapper key={id}>
              <Styled.ShippingInfoLabel htmlFor={id}>{label}</Styled.ShippingInfoLabel>
              <Styled.ShippingInfoInput type={inputType} id={id} />
            </Styled.ShippingInfoFormInputWrapper>
          );
        })}
        <Styled.ShippingInfoFormInputWrapper>
          <Styled.ShippingInfoLabel htmlFor={SHIPPING_ADDRESS}>배송지</Styled.ShippingInfoLabel>
          <Styled.AddressInfoInput
            type="text"
            id={SHIPPING_ADDRESS}
            value={shippingForm.address}
            placeholder="기본 주소"
            disabled
          />
          <Styled.AddressSearchButton
            type="button"
            onClick={() => daumPostCodeOpen({ onComplete: handleOnCompleteOfDaumPost })}
          >
            주소 찾기
          </Styled.AddressSearchButton>
        </Styled.ShippingInfoFormInputWrapper>
        <Styled.ShippingInfoFormInputWrapper>
          <Styled.ShippingInfoLabel htmlFor={SHIPPING_ADDRESS_DETAIL}>
            상세 주소
          </Styled.ShippingInfoLabel>
          <Styled.AddressInfoInput
            type="text"
            id={SHIPPING_ADDRESS_DETAIL}
            value={shippingForm.addressDetail}
            placeholder="상세 주소"
          />
        </Styled.ShippingInfoFormInputWrapper>
      </Styled.ShippingInfoForm>
    </Styled.ShippingInfoSection>
  );
};

export default ShippingInfo;
