import * as Styled from '@/components/order/OrderList/OrderList.styled';
import SectionHeading from '@/components/order/SectionHeading/SectionHeading';

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

const OrderList = () => {
  return (
    <section>
      <SectionHeading>주문 상품</SectionHeading>
      <ul>
        {productListToBuy.options.map(({ optionId, optionName, quantity, optionPrice }) => (
          <Styled.ProductListItem key={optionId}>
            <Styled.ProductImage src={productListToBuy.imageUrl} alt="" />
            <Styled.ProductTitle>{productListToBuy.name}</Styled.ProductTitle>
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
