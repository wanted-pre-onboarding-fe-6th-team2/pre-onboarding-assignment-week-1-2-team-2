import * as Styled from '@/components/order/PaymentAgreement/PaymentAgreement.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';

const PaymentAgreement = () => (
  <Styled.PaymentAgreementSection>
    <SectionHeading>결제 정보 동의</SectionHeading>
    <Styled.PaymentAgreementCheckbox type="checkbox" />
    <Styled.PaymentAgreementLabel>
      (필수) 구매조건 확인 및 결제 진행에 동의
    </Styled.PaymentAgreementLabel>
    {/* TODO: 정적 값을 제거하고 동적으로 값 주입 */}
    <Styled.OrderButton>{(200000).toLocaleString()}원 결제하기</Styled.OrderButton>
  </Styled.PaymentAgreementSection>
);

export default PaymentAgreement;
