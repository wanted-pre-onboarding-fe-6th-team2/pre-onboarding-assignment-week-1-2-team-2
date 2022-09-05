import * as Styled from '@/components/order/ShippingInfo/ShippingInfo.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';

const RECIPIENT_NAME = 'recipientName';
const RECIPIENT_PHONE_NUMBER = 'recipientPhoneNumber';
const RECIPIENT_EMAIL = 'recipientEmail';

const SHIPPING_ADDRESS = 'shippingAddress';
const SHIPPING_ADDRESS_DETAIL = 'shippingAddressDetail';

const RecipientInfoFormItems = [
  { label: '수령인', id: RECIPIENT_NAME, inputType: 'text' },
  { label: '연락처', id: RECIPIENT_PHONE_NUMBER, inputType: 'tel' },
  { label: '이메일', id: RECIPIENT_EMAIL, inputType: 'email' },
];

const ShippingInfo = () => {
  const daumPostCodeOpen = useDaumPostcodePopup();
  const [shippingForm, setShippingForm] = useState({
    [RECIPIENT_NAME]: '',
    [RECIPIENT_PHONE_NUMBER]: '',
    [RECIPIENT_EMAIL]: '',
    [SHIPPING_ADDRESS]: '',
    [SHIPPING_ADDRESS_DETAIL]: '',
  });

  const handleChangeForm = ({ target }) => {
    const { id, value } = target;
    setShippingForm(pre => ({
      ...pre,
      [id]: value,
    }));
  };

  const handleOnCompleteOfDaumPost = ({ address }) => {
    setShippingForm(pre => ({ ...pre, [SHIPPING_ADDRESS]: address }));
  };
  return (
    <Styled.ShippingInfoSection>
      <SectionHeading>배송 정보</SectionHeading>
      <Styled.ShippingInfoForm>
        {RecipientInfoFormItems.map(({ id, inputType, label }) => {
          return (
            <Styled.ShippingInfoFormInputWrapper key={id}>
              <Styled.ShippingInfoLabel htmlFor={id}>{label}</Styled.ShippingInfoLabel>
              <Styled.ShippingInfoInput
                type={inputType}
                id={id}
                value={shippingForm[id]}
                onChange={handleChangeForm}
              />
            </Styled.ShippingInfoFormInputWrapper>
          );
        })}
        <Styled.ShippingInfoFormInputWrapper>
          <Styled.ShippingInfoLabel htmlFor={SHIPPING_ADDRESS}>배송지</Styled.ShippingInfoLabel>
          <Styled.AddressInfoInput
            type="text"
            id={SHIPPING_ADDRESS}
            value={shippingForm[SHIPPING_ADDRESS]}
            onChange={handleChangeForm}
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
            value={shippingForm[SHIPPING_ADDRESS_DETAIL]}
            onChange={handleChangeForm}
            placeholder="상세 주소"
          />
        </Styled.ShippingInfoFormInputWrapper>
      </Styled.ShippingInfoForm>
    </Styled.ShippingInfoSection>
  );
};

export default ShippingInfo;
