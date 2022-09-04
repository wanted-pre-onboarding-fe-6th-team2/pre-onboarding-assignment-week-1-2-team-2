import * as Styled from '@/components/order/OrderSummary/PaymentSummary.styled';

const PaymentSummaryList = [
  { title: '주문금액', amount: 200000 },
  { title: '배송비', amount: 3000 },
];

const PaymentSummary = () => (
  <Styled.PaymentSummarySection>
    <Styled.PaymentSummaryHeading>결제 요약</Styled.PaymentSummaryHeading>
    <Styled.SummaryBox>
      {PaymentSummaryList.map(({ title, amount }) => (
        <Styled.SummaryWrapper>
          <Styled.SummaryTitle>{title}</Styled.SummaryTitle>
          <Styled.SummaryContent>{amount.toLocaleString()} 원</Styled.SummaryContent>
        </Styled.SummaryWrapper>
      ))}
      <Styled.DivisionLine />
      <Styled.SummaryWrapper>
        <Styled.TotalOrderAmountTitle>최종 결제 금액</Styled.TotalOrderAmountTitle>
        <Styled.TotalOrderAmountContent>
          {(203000).toLocaleString()} 원
        </Styled.TotalOrderAmountContent>
      </Styled.SummaryWrapper>
    </Styled.SummaryBox>
  </Styled.PaymentSummarySection>
);

export default PaymentSummary;
