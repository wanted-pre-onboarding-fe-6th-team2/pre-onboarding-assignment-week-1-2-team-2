import React from 'react';
import * as Styled from '@/components/PageContainer/Header/Header.styled';
import logo from '@/assets/images/logo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Inner>
        <Styled.Logo>
          <Link to="/">
            <img src={logo} alt="Fruitte" />
          </Link>
        </Styled.Logo>
        <Styled.Gnb>
          <li>
            <Link to="/store">FRUIT STORE</Link>
          </li>
          <li>
            <Link to="/orderlist">MY PAGE</Link>
          </li>
          <li>
            <Link to="/admin">ADMIN</Link>
          </li>
        </Styled.Gnb>
      </Styled.Inner>
    </Styled.Header>
  );
}
