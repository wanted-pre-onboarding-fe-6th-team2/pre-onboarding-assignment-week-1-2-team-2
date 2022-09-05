import * as Styled from '@/components/order/PaymentMethod/PaymentMethod.styled';
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const PAYMENTS_METHODS = {
  CREDIT_CARD: '신용카드',
  DEPOSIT_WITHOUT_BANKBOOK: '무통장 입금',
};

const paymentMethods = Object.entries(PAYMENTS_METHODS);

const PaymentMethod = () => {
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('');

  const handleChangePaymentMethod = paymentMethodId => {
    setCurrentPaymentMethod(paymentMethodId);
  };

  return (
    <Styled.PaymentMethodSection>
      <SectionHeading>결제 수단</SectionHeading>
      <Styled.PaymentMethodSelectSection>
        <Styled.PaymentMethodSelectTitle>결제수단 선택</Styled.PaymentMethodSelectTitle>
        <Styled.PaymentMethodList>
          {paymentMethods.map(([paymentMethodId, paymentMethod]) => (
            <Styled.PaymentMethodSelectButton
              key={paymentMethodId}
              onClick={() => handleChangePaymentMethod(paymentMethodId)}
              isCurrentPaymentMethod={paymentMethodId === currentPaymentMethod}
            >
              {paymentMethod}
            </Styled.PaymentMethodSelectButton>
          ))}
        </Styled.PaymentMethodList>
      </Styled.PaymentMethodSelectSection>
    </Styled.PaymentMethodSection>
  );
};

export default PaymentMethod;
