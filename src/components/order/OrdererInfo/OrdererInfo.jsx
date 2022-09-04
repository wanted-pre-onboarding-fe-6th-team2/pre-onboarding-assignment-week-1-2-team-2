import * as Styled from '@/components/order/OrdererInfo/OrdererInfo.styled';
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const ORDERER_NAME = 'ordererName';
const ORDERER_PHONE_NUMBER = 'ordererPhoneNumber';
const ORDERER_EMAIL = 'ordererEmail';

const OrdererInfoFormItems = [
  { label: '보내는 분', id: ORDERER_NAME, inputType: 'text' },
  { label: '연락처', id: ORDERER_PHONE_NUMBER, inputType: 'tel' },
  { label: '이메일', id: ORDERER_EMAIL, inputType: 'email' },
];

const OrdererInfo = () => {
  const [ordererInfoForm, setOrdererInfoForm] = useState({
    [ORDERER_NAME]: '',
    [ORDERER_PHONE_NUMBER]: '',
    [ORDERER_EMAIL]: '',
  });

  const handleChangeOrdererInfoForm = ({ target }) => {
    const { id, value } = target;
    setOrdererInfoForm(pre => ({ ...pre, [id]: value }));
  };

  return (
    <Styled.OrdererInfoSection>
      <SectionHeading>주문자 정보</SectionHeading>
      <Styled.OrdererInfoForm>
        {OrdererInfoFormItems.map(({ id, inputType, label }) => {
          return (
            <Styled.OrdererInfoFormInputWrapper key={id}>
              <Styled.OrdererInfoLabel htmlFor={id}>{label}</Styled.OrdererInfoLabel>
              <Styled.OrdererInfoInput
                type={inputType}
                id={id}
                value={ordererInfoForm[id]}
                onChange={handleChangeOrdererInfoForm}
              />
            </Styled.OrdererInfoFormInputWrapper>
          );
        })}
      </Styled.OrdererInfoForm>
    </Styled.OrdererInfoSection>
  );
};

export default OrdererInfo;
