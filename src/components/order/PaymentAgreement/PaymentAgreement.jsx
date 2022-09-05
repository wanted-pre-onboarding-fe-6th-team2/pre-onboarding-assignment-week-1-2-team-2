import * as Styled from '@/components/order/PaymentAgreement/PaymentAgreement.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';
import { useOutletContext } from 'react-router-dom';

const PAYMENT_AGREEMENT = 'paymentAgreement';

const PaymentAgreement = () => {
  const { orderData } = useOutletContext();

  const totalOrderAmount = orderData.option.reduce(
    (acc, { optionPrice, quantity }) => acc + optionPrice * quantity,
    0
  );
  const { shippingPrice } = orderData.shipping;
  const convertedShippingPrice = typeof shippingPrice === 'string' ? 0 : shippingPrice;

  return (
    <Styled.PaymentAgreementSection>
      <SectionHeading>결제 정보 동의</SectionHeading>
      <Styled.PaymentAgreementCheckbox type="checkbox" id={PAYMENT_AGREEMENT} />
      <Styled.PaymentAgreementLabel htmlFor={PAYMENT_AGREEMENT}>
        (필수) 구매조건 확인 및 결제 진행에 동의
      </Styled.PaymentAgreementLabel>
      <Styled.OrderButton>
        {(totalOrderAmount + convertedShippingPrice).toLocaleString()}원 결제하기
      </Styled.OrderButton>
    </Styled.PaymentAgreementSection>
  );
};

export default PaymentAgreement;
