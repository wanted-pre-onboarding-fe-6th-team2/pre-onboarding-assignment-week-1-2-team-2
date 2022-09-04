import styled from '@emotion/styled';

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  justify-content: center;
  position: relative;

  & > div {
    grid-column: 1 / 4;
  }

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, 35vw);

    & > div {
      grid-column: 1 / 3;
    }
  }

  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 80vw);

    & > div {
      grid-column: 1;
    }
  }
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
    /* flex-basis: 3em; */
    margin-top: 1em;
  }

  & span {
    font-weight: bold;
    color: rgb(65, 143, 34);
  }
`;

const Product = styled.li`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 20em;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
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
  margin-bottom: 0.5em;
`;

export {
  ProductList,
  StoreDescription,
  Product,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductDiscountRate,
  ProductPrice,
  ProductDiscountPrice,
};
