import * as Styled from '@/components/order/OrdererInfo/OrdererInfo.styled';
import SectionHeading from '../SectionHeading/SectionHeading';

const ORDERER_NAME = 'orderer-name';
const ORDERER_PHONE_NUMBER = 'orderer-name';
const ORDERER_EMAIL = 'orderer-name';

const OrdererInfoFormItems = [
  { label: '보내는 분', id: ORDERER_NAME, inputType: 'text' },
  { label: '연락처', id: ORDERER_PHONE_NUMBER, inputType: 'tel' },
  { label: '이메일', id: ORDERER_EMAIL, inputType: 'email' },
];

const OrdererInfo = () => (
  <Styled.OrdererInfoSection>
    <SectionHeading>주문자 정보</SectionHeading>
    <Styled.OrdererInfoForm>
      {OrdererInfoFormItems.map(({ id, inputType, label }) => {
        return (
          <Styled.OrdererInfoFormInputWrapper>
            <Styled.OrdererInfoLabel htmlFor={id}>{label}</Styled.OrdererInfoLabel>
            <Styled.OrdererInfoInput type={inputType} id={id} />
          </Styled.OrdererInfoFormInputWrapper>
        );
      })}
    </Styled.OrdererInfoForm>
  </Styled.OrdererInfoSection>
);

export default OrdererInfo;
