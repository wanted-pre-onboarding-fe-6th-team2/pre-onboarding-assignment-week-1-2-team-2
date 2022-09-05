import * as Styled from '@/components/order/PaymentAgreement/PaymentAgreement.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';
import { ROUTES } from '@/constants/route';
import { orderActions } from '@/redux/orderSlice/orderSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';

const PAYMENT_AGREEMENT = 'paymentAgreement';

const PaymentAgreement = () => {
  const [isAgreement, setIsAgreement] = useState(false);

  const navigate = useNavigate();
  const { orderData } = useOutletContext();
  const orderedList = useSelector(({ order }) => order);
  const dispatch = useDispatch();

  const totalOrderAmount = orderData.option.reduce(
    (acc, { optionPrice, quantity }) => acc + optionPrice * quantity,
    0
  );
  const { shippingPrice } = orderData.shipping;
  const convertedShippingPrice = typeof shippingPrice === 'string' ? 0 : shippingPrice;

  const handleAddOrderedList = () => {
    const newOrderId = Math.max(...orderedList.map(({ id }) => id));
    const orderOptions = orderData.option.map(({ optionId, quantity }) => ({
      optionId,
      productId: orderData.id,
      quantity,
    }));
    const newOrder = { id: newOrderId || 0, option: orderOptions };
    dispatch(orderActions.add(newOrder));

    navigate(ROUTES.ORDERLIST);
  };

  const handleChangePaymentAgreement = () => {
    setIsAgreement(pre => !pre);
  };

  return (
    <Styled.PaymentAgreementSection>
      <SectionHeading>결제 정보 동의</SectionHeading>
      <Styled.PaymentAgreementCheckbox
        type="checkbox"
        id={PAYMENT_AGREEMENT}
        checked={isAgreement}
        onChange={handleChangePaymentAgreement}
      />
      <Styled.PaymentAgreementLabel htmlFor={PAYMENT_AGREEMENT}>
        (필수) 구매조건 확인 및 결제 진행에 동의
      </Styled.PaymentAgreementLabel>
      <Styled.OrderButton type="button" onClick={handleAddOrderedList} disabled={!isAgreement}>
        {(totalOrderAmount + convertedShippingPrice).toLocaleString()}원 결제하기
      </Styled.OrderButton>
    </Styled.PaymentAgreementSection>
  );
};

export default PaymentAgreement;
