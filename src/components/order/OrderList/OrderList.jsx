import * as Styled from '@/components/order/OrderList/OrderList.styled';

const OrderList = () => (
  <section>
    <Styled.OrderListHeading>주문 상품</Styled.OrderListHeading>
    <ul>
      <Styled.ProductListItem>
        <Styled.ProductImage
          src="https://img-cf.kurly.com/shop/data/goods/1637147561308l0.jpg"
          alt=""
        />
        <Styled.ProductTitle>삼겹살</Styled.ProductTitle>
        <Styled.ProductCount>6개</Styled.ProductCount>
        <Styled.ProductPrice>93,600원</Styled.ProductPrice>
      </Styled.ProductListItem>
    </ul>
  </section>
);

export default OrderList;
