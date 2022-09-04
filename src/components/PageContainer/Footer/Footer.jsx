import React from 'react';
import * as Styled from '@/components/PageContainer/Footer/Footer.styled';
import { Link } from 'react-router-dom';
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
            카카오톡채널: 프루떼 <br />
            (주중 9시~18시 채팅 상담 가능)
          </Styled.CsDesc>
        </div>
        <div>
          <Styled.Fnb>
            <li>
              <Link to="/store">FRUIT STORE</Link>
            </li>
            <li>
              <Link to="/orderlist">MY PAGE</Link>
            </li>
          </Styled.Fnb>
          <Styled.CompanyInfo>
            <li>상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472 </li>
            <li>사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110</li>
            <li>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</li>
          </Styled.CompanyInfo>
          <Styled.SnsArea>
            <li>
              <Link to="https://blog.naver.com/fruitte" target="_blank" rel="noopener noreferrer">
                <img src={imgInstagram} alt="블로그"></img>
              </Link>
            </li>
            <li>
              <Link to="https://pf.kakao.com/_jBWkK" target="_blank" rel="noopener noreferrer">
                <img src={imgkakao} alt="블로그"></img>
              </Link>
            </li>
            <li>
              <Link to="https://blog.naver.com/fruitte" target="_blank" rel="noopener noreferrer">
                <img src={imgBlog} alt="블로그"></img>
              </Link>
            </li>
          </Styled.SnsArea>
        </div>
      </Styled.Inner>
      <Styled.Copyright>
        Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.
      </Styled.Copyright>
    </Styled.Footer>
  );
}
