import styled from '@emotion/styled';

const ProductListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const ProductImage = styled.img`
  width: 60px;
  height: 78px;
`;

const ProductTitle = styled.span`
  flex-grow: 1;
  margin: 0 20px;
  text-align: left;
  font-weight: 500;
`;

const ProductCount = styled.span`
  width: 100px;
`;

const ProductPrice = styled.span`
  width: 126px;
  font-weight: 700;
`;

export { ProductListItem, ProductImage, ProductTitle, ProductCount, ProductPrice };
