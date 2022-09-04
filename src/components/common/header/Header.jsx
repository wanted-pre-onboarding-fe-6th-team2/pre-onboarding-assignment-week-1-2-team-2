import React from 'react';
import * as Styled from '@/components/common/header/Header.styled';
import fruitLogo from '@/assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/route';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Inner>
        <Styled.Logo>
          <Link to={ROUTES.HOME}>
            <img src={fruitLogo} alt="Fruitte" />
          </Link>
        </Styled.Logo>
        <Styled.Gnb>
          <li>
            <Link to={ROUTES.PRODUCTLIST}>FRUIT STORE</Link>
          </li>
          <li>
            <Link to={ROUTES.ORDERLIST}>MY PAGE</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>ADMIN</Link>
          </li>
        </Styled.Gnb>
      </Styled.Inner>
    </Styled.Header>
  );
}
