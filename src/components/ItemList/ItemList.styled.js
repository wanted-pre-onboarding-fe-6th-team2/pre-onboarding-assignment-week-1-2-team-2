import styled from '@emotion/styled';

const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  justify-content: center;
  position: relative;

  & > p {
    position: absolute;
    top: 7em;
    left: 2.5em;
  }

  & > div {
    grid-column: 1 / 4;
    text-align: center;
    margin-bottom: 3em;

    & > img {
      width: 2em;
      height: 2em;
    }

    & > h2 {
      font-size: 2em;
      font-weight: bold;
    }
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

const Item = styled.li`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

const ItemImageContainer = styled.div`
  height: 20em;
  overflow: hidden;

  @media all and (max-width: 768px) {
    height: 25em;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

const ItemName = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DiscountRate = styled.span`
  color: red;
  font-size: 0.75em;
  font-weight: bold;
  margin-right: 0.5em;
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
