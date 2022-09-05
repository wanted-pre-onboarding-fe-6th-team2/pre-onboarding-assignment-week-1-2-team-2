import React from 'react';
import * as Styled from '@/components/common/footer/Footer.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/route';
import imgBlog from '@/assets/images/ico_blog.png';
import imgkakao from '@/assets/images/ico_kakao.png';
import imgInstagram from '@/assets/images/ico_instagram.png';

export default function Footer() {
  return (
    <Styled.Footer>
      <Styled.Inner>
        <div>
          <Styled.CsTitle>무통장 입금 계좌안내 </Styled.CsTitle>
          <Styled.CsDesc>국민은행 527837-01-004676</Styled.CsDesc>
        </div>
        <div>
          <Styled.CsTitle>문의안내</Styled.CsTitle>
          <Styled.CsDesc>
            카카오톡채널: 프루떼
            <span>(주중 9시~18시 채팅 상담 가능)</span>
          </Styled.CsDesc>
        </div>
        <div>
          <Styled.Fnb>
            <li>
              <Link to={ROUTES.PRODUCTLIST}>FRUIT STORE</Link>
            </li>
            <li>
              <Link to={ROUTES.ORDERLIST}>MY PAGE</Link>
            </li>
          </Styled.Fnb>
          <Styled.CompanyInfoUl>
            <li>상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472 </li>
            <li>사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110</li>
            <li>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</li>
          </Styled.CompanyInfoUl>
          <Styled.SnsAreaUl>
            <li>
              <a href="https://www.instagram.com/fruitte_picnic/" target="_blank" rel="noreferrer">
                <img src={imgInstagram} alt="인스타그램" />
              </a>
            </li>
            <li>
              <a href="https://pf.kakao.com/_jBWkK" target="_blank" rel="noreferrer">
                <img src={imgkakao} alt="카카오 채팅" />
              </a>
            </li>
            <li>
              <a href="https://blog.naver.com/fruitte" target="_blank" rel="noreferrer">
                <img src={imgBlog} alt="블로그" />
              </a>
            </li>
          </Styled.SnsAreaUl>
        </div>
      </Styled.Inner>
      <Styled.Copyright>
        Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.
      </Styled.Copyright>
    </Styled.Footer>
  );
}
