import OrdererInfo from '@/components/order/OrdererInfo/OrdererInfo';
import OrderList from '@/components/order/OrderList/OrderList';
import PaymentSummary from '@/components/order/OrderSummary/PaymentSummary';
import PaymentAgreement from '@/components/order/PaymentAgreement/PaymentAgreement';
import PaymentMethod from '@/components/order/PaymentMethod/PaymentMethod';
import ShippingInfo from '@/components/order/ShippingInfo/ShippingInfo';
import * as Styled from '@/pages/Order/Order.styled';

const Order = () => {
  return (
    <Styled.PageContainer>
      <Styled.OrderPageHeading>주문서</Styled.OrderPageHeading>
      <OrderList />
      <Styled.FlexBox>
        <div>
          <OrdererInfo />
          <ShippingInfo />
          <PaymentMethod />
          <PaymentAgreement />
        </div>
        <PaymentSummary />
      </Styled.FlexBox>
    </Styled.PageContainer>
  );
};

export default Order;
