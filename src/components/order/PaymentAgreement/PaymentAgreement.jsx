import * as Styled from '@/components/order/PaymentAgreement/PaymentAgreement.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';

const PaymentAgreement = () => (
  <Styled.PaymentAgreementSection>
    <SectionHeading>결제 정보 동의</SectionHeading>
    <Styled.PaymentAgreementCheckbox type="checkbox" />
    <Styled.PaymentAgreementLabel>
      (필수) 구매조건 확인 및 결제 진행에 동의
    </Styled.PaymentAgreementLabel>
  </Styled.PaymentAgreementSection>
);

export default PaymentAgreement;
