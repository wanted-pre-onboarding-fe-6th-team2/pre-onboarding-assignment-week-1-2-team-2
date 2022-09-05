import * as Styled from '@/components/order/OrderList/OrderList.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';
import { useOutletContext } from 'react-router-dom';

const OrderList = () => {
  const { orderData } = useOutletContext();

  return (
    <section>
      <SectionHeading>주문 상품</SectionHeading>
      <ul>
        {orderData.option?.map(({ optionId, optionName, quantity, optionPrice }) => (
          <Styled.ProductListItem key={optionId}>
            <Styled.ProductImage src={orderData.imageUrl} alt="" />
            <Styled.ProductTitle>{orderData.name}</Styled.ProductTitle>
            <Styled.ProductOption>{optionName}</Styled.ProductOption>
            <Styled.ProductCount>{quantity}개</Styled.ProductCount>
            <Styled.ProductPrice>
              {(optionPrice * quantity).toLocaleString()} 원
            </Styled.ProductPrice>
          </Styled.ProductListItem>
        ))}
      </ul>
    </section>
  );
};

export default OrderList;
