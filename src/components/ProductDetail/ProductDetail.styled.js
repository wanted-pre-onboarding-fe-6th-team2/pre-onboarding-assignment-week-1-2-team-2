import styled from '@emotion/styled';

const Container = styled.article`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 1050px;
`;

const Dl = styled.dl`
  display: flex;
  padding: 17px 0px 18px;
  border-top: 1px solid rgb(244, 244, 244);

  dt {
    width: 128px;
  }
`;

const Div = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PriceDiv = styled.div`
  padding: 17px 0px 18px;
  * {
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
  span:last-of-type {
    font-size: 20px;
  }
`;

const H2 = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);
  padding: 17px 0px 18px;
`;

const Description = styled.div`
  padding: 0px 0px 18px;
  color: rgb(181, 181, 181);
`;

const DivWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img,
  button {
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10%;
  top: 7%;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgb(181, 181, 181);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
  button {
    background-color: #4c9c2e;
    border: none;
    color: white;
    padding: 10px 50px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border-radius: 3px;
  }
`;

const SpanGroup = styled.div`
  text-align: right;
  padding-bottom: 20px;
  span {
    font-weight: bold;
    font-size: 28px;
  }
  span:first-of-type {
    margin-right: 10px;
    font-size: 13px;
    font-weight: 500;
  }

  span:last-of-type {
    font-size: 20px;
  }
`;

const DivGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border: 1px solid rgb(244, 244, 244);
  margin-bottom: 11px;

  .close-btn {
    background-color: white;
    border: none;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail {
    padding-top: 15px;
  }

  .btn-group {
    border: 1px solid rgb(221, 223, 225);
    width: 88px;
    border-radius: 3px;

    button {
      background-color: white;
      border: none;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    div {
      font-size: 14px;
    }
  }
`;

const MenuItemDiv = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  width: 100%;
`;

export {
  Container,
  Dl,
  Div,
  PriceDiv,
  H2,
  Description,
  DivWrap,
  Modal,
  ButtonGroup,
  SpanGroup,
  DivGroup,
  MenuItemDiv,
};
