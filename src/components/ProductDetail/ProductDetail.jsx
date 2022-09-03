import * as Styled from '@/components/ProductDetail/ProductDetail.styled';

const ProductDetail = () => (
  // const productMockData = {
  //   name: 'kimchi',
  //   description: '맛있는 김치',
  //   origin: '강원도 홍천군',
  //   shipping: '무료 배송',
  //   count: 1,
  //   price: 5000,
  // };

  <Styled.Container>
    <img
      width={450}
      height={550}
      src="https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg"
    />

    <Styled.Div>
      <Styled.H2>오늘의 샐러드 8종 (리뉴얼)</Styled.H2>
      <Styled.Description>
        매일 협력 농가에서 공수해오는 신선한 잎채소로 담은 스윗밸런스의 오늘의 샐러드를 만나 보세요.
      </Styled.Description>
      <Styled.PriceDiv>가격</Styled.PriceDiv>
      <Styled.Dl>
        <dt>원산지</dt>
        <dd>강원도 홍천군</dd>
      </Styled.Dl>
      <Styled.Dl>
        <dt>배송</dt>
        <dd>무료 배송</dd>
      </Styled.Dl>
      <Styled.Dl>
        <dt>상품 선택</dt>
        <div>select 박스 칸</div>
      </Styled.Dl>
    </Styled.Div>
  </Styled.Container>
);

export default ProductDetail;
