import styled from '@emotion/styled';

const Container = styled.article`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  border: 1px red solid;
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
`;

const PriceDiv = styled.div`
  font-size: 28px;
  color: rgb(51, 51, 51);
  font-weight: bold;
  padding: 17px 0px 18px;
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

  img:first-of-type {
    margin-right: 10px;
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
  top: 6%;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgb(181, 181, 181);
`;
export { Container, Dl, Div, PriceDiv, H2, Description, DivWrap, Modal };
