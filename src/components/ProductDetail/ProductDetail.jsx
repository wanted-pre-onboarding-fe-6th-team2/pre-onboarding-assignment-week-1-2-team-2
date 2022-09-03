import * as Styled from '@/components/ProductDetail/ProductDetail.styled';
import likeIcon from '@/assets/svg/like.svg';
import clickedLikeIcon from '@/assets/svg/clicked-like.svg';
import shareIcon from '@/assets/svg/share.svg';
import { useEffect, useState, useRef } from 'react';

const ProductDetail = () => {
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isShareModalOpened, setIsShareModalOpened] = useState(false);
  const copyModalRef = useRef([]);
  const handleClickLike = () => setIsLikeClicked(prev => !prev);
  const handleCopyUrl = async e => {
    await copyModalRef.current[1].select();
    await document.execCommand('copy');
    await e.target.focus();
    await alert('링크가 복사되었습니다');
    await setIsShareModalOpened(prev => !prev);
  };

  // 외부 클릭 시에도 닫히도록 하는 함수
  const clickOutside = e => {
    if (isShareModalOpened && !copyModalRef.current.includes(e.target)) {
      setIsShareModalOpened(prev => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  return (
    <Styled.Container>
      <img
        width={450}
        height={550}
        src="https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg"
      />

      <Styled.Div>
        <Styled.DivWrap>
          <Styled.H2>오늘의 샐러드 8종 (리뉴얼)</Styled.H2>
          <div>
            {isLikeClicked ? (
              <img src={clickedLikeIcon} onClick={handleClickLike} />
            ) : (
              <img src={likeIcon} onClick={handleClickLike} />
            )}
            <img
              ref={el => (copyModalRef.current[0] = el)}
              src={shareIcon}
              onClick={() => setIsShareModalOpened(prev => !prev)}
            />
          </div>
          {isShareModalOpened && (
            <Styled.Modal>
              <div>
                <input ref={el => (copyModalRef.current[1] = el)} value={window.location.href} />
                <button ref={el => (copyModalRef.current[2] = el)} onClick={handleCopyUrl}>
                  URL 복사
                </button>
              </div>
            </Styled.Modal>
          )}
        </Styled.DivWrap>
        <Styled.Description>
          매일 협력 농가에서 공수해오는 신선한 잎채소로 담은 스윗밸런스의 오늘의 샐러드를 만나
          보세요.
        </Styled.Description>
        <Styled.PriceDiv>가격</Styled.PriceDiv>
        <Styled.Dl>
          <dt>원산지</dt>
          <dd>강원도 홍천군</dd>
        </Styled.Dl>
        <Styled.Dl>
          <dt>배송</dt>
          <dd>무료 배송</dd>
        </Styled.Dl>
        <Styled.Dl>
          <dt>상품 선택</dt>
          <div>select 박스 칸</div>
        </Styled.Dl>
        <button>구매하기</button>
        <button>장바구니</button>
      </Styled.Div>
    </Styled.Container>
  );
};

export default ProductDetail;
