import styled from '@emotion/styled';

const Footer = styled.div`
  position: relative;
  width: 100%;
  min-width: 1050px;
  background: #fff;
  border-top: 1px solid rgb(247, 247, 247);
`;
const Inner = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  letter-spacing: -0.3px;
  display: flex;
  justify-content: space-between;
  padding: 40px 0 60px;
`;
const CsTitle = styled.h3`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.5px;
`;
const CsDesc = styled.p`
  color: rgb(153, 153, 153);
  font-size: 14px;
  line-height: 1.6;
`;

const CsInfo = styled.div`
  width: 150px;
  img {
    max-width: 100%;
  }
`;
const Fnb = styled.ul`
  display: flex;
  padding-bottom: 15px;
  li {
    margin-right: 14px;
  }
  a {
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
      color: #418f22;
    }
  }
`;
const CompanyInfo = styled.ul`
  li {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.6;
    color: rgb(153, 153, 153);
  }
`;
const SnsArea = styled.ul`
  display: flex;
  margin-top: 15px;
  li {
    margin-right: 10px;
  }
  img {
    width: 30px;
  }
`;
const Copyright = styled.p`
  padding: 20px 0px 30px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  background-color: rgb(247, 247, 247);
  color: rgb(153, 153, 153);
`;

export { Footer, Inner, CompanyInfo, Copyright, CsInfo, CsTitle, Fnb, SnsArea, CsDesc };
