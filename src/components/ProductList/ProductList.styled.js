import styled from '@emotion/styled';

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 3em;
  margin-top: 2rem;
  margin-bottom: 1.5em;
`;

const StoreDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;

  & > img {
    width: 2em;
    height: 2em;
  }

  & > h2 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }

  & > p {
    text-align: center;
  }

  & > p:last-child {
    margin: 1em 0 0.5em 0.5em;
    align-self: flex-start;
  }

  & span {
    font-weight: bold;
    color: rgb(65, 143, 34);
  }

  border-bottom: 0.1em solid rgb(65, 143, 34);
`;

const Product = styled.li`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 1.5em;

  &:last-child {
    border-bottom: 0.1em solid rgb(65, 143, 34);
  }
`;

const ProductImageContainer = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;

  & > img:last-child {
    z-index: 1000;
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 0.5em;
`;

const ProductName = styled.h2`
  width: 100%;
  margin-top: 0.5em;
  font-weight: bold;
  font-size: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductDescription = styled.p`
  width: 100%;
  font-size: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductDiscountRate = styled.span`
  color: red;
  font-size: 0.75em;
  font-weight: bold;
  margin-right: 0.5em;
`;

const ProductDiscountPrice = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  color: #aaa;
  font-size: 1em;
  font-weight: bold;
`;

export {
  ProductList,
  StoreDescription,
  Product,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductDiscountRate,
  ProductPrice,
  ProductDiscountPrice,
};
