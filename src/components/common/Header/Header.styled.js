import styled from '@emotion/styled';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  min-width: 1050px;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  background: #fff;
  z-index: 100;
`;

const Inner = styled.div`
  position: relative;
  width: 1050px;
  height: 60px;
  margin: 0px auto;
  letter-spacing: -0.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 150px;
  img {
    max-width: 100%;
  }
`;

const Gnb = styled.ul`
  display: flex;
  li {
    margin: 0 30px;
  }
  a {
    height: fit-content;
    font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    cursor: pointer;
    display: block;
    line-height: 20px;
    text-decoration: none;
    transition: all 0.5s ease;
    font-weight: bold;
    &:hover {
      color: #418f22;
    }
  }
`;

export { Header, Inner, Logo, Gnb };
