import * as Styled from '@/components/order/PaymentMethod/PaymentMethod.styled';
import SectionHeading from '../SectionHeading/SectionHeading';

const paymentMethods = ['신용카드', '무통장 입금'];

const PaymentMethod = () => (
  <Styled.PaymentMethodSection>
    <SectionHeading>결제 수단</SectionHeading>
    <Styled.PaymentMethodSelectSection>
      <Styled.PaymentMethodSelectTitle>결제수단 선택</Styled.PaymentMethodSelectTitle>
      <Styled.PaymentMethodList>
        {paymentMethods.map(paymentMethod => (
          <Styled.PaymentMethodSelectButton key={paymentMethod}>
            {paymentMethod}
          </Styled.PaymentMethodSelectButton>
        ))}
      </Styled.PaymentMethodList>
    </Styled.PaymentMethodSelectSection>
  </Styled.PaymentMethodSection>
);

export default PaymentMethod;
