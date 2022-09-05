import * as Styled from '@/components/order/OrderSummary/PaymentSummary.styled';

const productListToBuy = {
  id: 1,
  name: '거창 오가네체리자두 3kg 한 상자',
  imageUrl: 'https://cdn.imweb.me/thumbnail/20200715/53fa50226803f.jpg',
  description: '',
  discountRate: 15,
  isDisPlay: true,
  isLiked: false,
  shipping: { shippingPrice: '무료 배송', shippingBasis: 3000 },
  options: [
    { optionId: 1, optionName: '초코맛 50g', optionPrice: 300, optionStock: 10, quantity: 3 },
  ],
};

const PaymentSummary = () => {
  const totalOrderAmount = productListToBuy.options.reduce(
    (acc, { optionPrice, quantity }) => acc + optionPrice * quantity,
    0
  );

  const { shippingPrice } = productListToBuy.shipping;

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
