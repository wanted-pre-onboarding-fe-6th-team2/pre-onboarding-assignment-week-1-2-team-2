import * as Styled from '@/components/order/OrderSummary/PaymentSummary.styled';
import { useOutletContext } from 'react-router-dom';

const PaymentSummary = () => {
  const { orderData } = useOutletContext();

  const totalOrderAmount = orderData.option.reduce(
    (acc, { optionPrice, quantity }) => acc + optionPrice * quantity,
    0
  );

  const { shippingPrice } = orderData.shipping;

  const convertedShippingPrice = typeof shippingPrice === 'string' ? 0 : shippingPrice;

  const PaymentSummaryList = [
    { title: '주문금액', amount: totalOrderAmount },
    { title: '배송비', amount: shippingPrice },
  ];
  return (
    <Styled.PaymentSummarySection>
      <Styled.PaymentSummaryHeading>결제 요약</Styled.PaymentSummaryHeading>
      <Styled.SummaryBox>
        {PaymentSummaryList.map(({ title, amount }) => (
          <Styled.SummaryWrapper key={title}>
            <Styled.SummaryTitle>{title}</Styled.SummaryTitle>
            <Styled.SummaryContent>
              {amount.toLocaleString()}
              {typeof amount !== 'string' && '원'}
            </Styled.SummaryContent>
          </Styled.SummaryWrapper>
        ))}
        <Styled.DivisionLine />
        <Styled.SummaryWrapper>
          <Styled.TotalOrderAmountTitle>최종 결제 금액</Styled.TotalOrderAmountTitle>
          <Styled.TotalOrderAmountContent>
            {(totalOrderAmount + convertedShippingPrice).toLocaleString()} 원
          </Styled.TotalOrderAmountContent>
        </Styled.SummaryWrapper>
      </Styled.SummaryBox>
    </Styled.PaymentSummarySection>
  );
};

export default PaymentSummary;
