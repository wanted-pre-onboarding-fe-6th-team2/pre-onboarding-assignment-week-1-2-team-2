import styled from '@emotion/styled';
import { Select } from '@mui/material';

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
  right: 21.5%;
  top: 6%;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgb(181, 181, 181);

  input {
    border: 1px rgb(181, 181, 181) solid;
    padding: 5px 10px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  button {
    border: none;
    background-color: #4c9c2e;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
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
  padding-bottom: 10px;
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

const AdditionDiv = styled.div`
  text-align: right;
  font-size: 14px;
  color: red;
  padding-bottom: 20px;
`;

const StyledSelect = styled(Select)`
  fieldset {
    border-color: #4c9c2e !important;
  }
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
  AdditionDiv,
  StyledSelect,
};
