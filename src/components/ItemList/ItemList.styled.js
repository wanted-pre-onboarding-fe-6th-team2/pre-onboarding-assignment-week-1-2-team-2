import styled from '@emotion/styled';

const ItemList = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled.li`
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

const ItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-basis: 50%;

  @media all and (max-width: 1024px) {
    flex-basis: 70%;
  }

  @media all and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const ItemImage = styled.img`
  width: 100%;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

const ItemName = styled.h2`
  font-weight: 400;
`;

const DiscountRate = styled.span`
  color: red;
  font-size: 0.75em;
  font-weight: bold;
`;

const ItemDiscountPrice = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const ItemPrice = styled.p`
  text-decoration: line-through;
  color: #aaa;
  font-size: 1em;
  font-weight: bold;
`;

export {
  ItemList,
  Item,
  ItemImageContainer,
  ItemImage,
  ItemName,
  DiscountRate,
  ItemPrice,
  ItemDiscountPrice,
};
