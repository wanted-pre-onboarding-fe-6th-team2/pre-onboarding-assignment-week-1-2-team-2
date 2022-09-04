import * as Styled from '@/components/order/OrderList/OrderList.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';

const OrderList = () => (
  <section>
    <SectionHeading>주문 상품</SectionHeading>
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
