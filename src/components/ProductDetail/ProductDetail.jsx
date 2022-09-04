import * as Styled from '@/components/ProductDetail/ProductDetail.styled';
import closeIcon from '@/assets/svg/close.svg';
import likeIcon from '@/assets/svg/like.svg';
import clickedLikeIcon from '@/assets/svg/clicked-like.svg';
import shareIcon from '@/assets/svg/share.svg';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const productData = useSelector(state => state.product)[0];
  const { imageUrl, name, description, price, origin, shipping, isLiked, option } = productData;
  const [isLikeClicked, setIsLikeClicked] = useState(isLiked);
  const [isShareModalOpened, setIsShareModalOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [productListToBuy, setProductListToBuy] = useState([]);
  const copyModalRef = useRef([]);
  const handleClickLike = () => setIsLikeClicked(prev => !prev);
  const handleCopyUrl = async e => {
    await copyModalRef.current[1].select();
    await document.execCommand('copy');
    await e.target.focus();
    await alert('링크가 복사되었습니다');
    await setIsShareModalOpened(prev => !prev);
  };

  const handleFormatPrice = item => item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleChangeSelectBox = async e => {
    await setSelectedItem(e.target.value);
    if (productListToBuy.map(item => item.optionName).includes(e.target.value))
      await alert('이미 추가된 옵션입니다.');
    else {
      const copied = [...productListToBuy];
      const copiedItem = option.filter(item => item.optionName === e.target.value)[0];
      await copied.push({ ...copiedItem, quantity: 1 });
      await setProductListToBuy(copied);
    }
    await setSelectedItem(0);
  };

  const handleCloseOptionBox = async e => {
    let copiedList = [...productListToBuy];
    copiedList = await copiedList.filter(item => item.optionName !== e.currentTarget.value);
    await setProductListToBuy(copiedList);
  };

  const totalPrice = () => {
    if (productListToBuy.length === 0) return 0;
    else {
      const copiedList = productListToBuy.map(item => item.optionPrice * item.quantity);
      return copiedList.reduce((a, b) => a + b);
    }
  };

  const handleCalculateNum = async e => {
    const copiedList = [...productListToBuy];
    let updatedData = copiedList.filter(item => item.optionName === e.currentTarget.value)[0];
    if (e.target.textContent === '+') {
      updatedData = { ...updatedData, quantity: updatedData.quantity + 1 };
    } else {
      updatedData = { ...updatedData, quantity: updatedData.quantity - 1 };
    }
    await setProductListToBuy(
      copiedList.map(item => (item.optionName === updatedData.optionName ? updatedData : item))
    );
  };

  const handleSubmit = () => {
    if (productListToBuy.length === 0) {
      alert('상품 옵션을 선택해주세요.');
    } else alert('주문페이지로 이동합니다.');
  };

  const additionalShippingDescription = () => {
    const shippingCutline = shipping.shippingBasis - totalPrice();
    if (shippingCutline > 0) return `(${handleFormatPrice(shippingCutline)}원 추가하면 무료배송!)`;
    else return '(무료배송)';
  };

  // 외부 클릭 시에도 닫히도록 하는 함수
  const handleClickOutside = e => {
    if (isShareModalOpened && !copyModalRef.current.includes(e.target)) {
      setIsShareModalOpened(prev => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Styled.Container>
      <img width={450} height={550} src={imageUrl} alt="상품 이미지" />

      <Styled.Div>
        <div>
          <Styled.DivWrap>
            <Styled.H2>{name}</Styled.H2>
            <div>
              <img
                ref={el => (copyModalRef.current[0] = el)}
                src={shareIcon}
                alt="공유 아이콘"
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
          <Styled.Description>{description}</Styled.Description>
          <Styled.PriceDiv>
            <span>{handleFormatPrice(price)}</span>
            <span>원</span>
          </Styled.PriceDiv>
          <Styled.Dl>
            <dt>원산지</dt>
            <dd>{origin}</dd>
          </Styled.Dl>
          <Styled.Dl>
            <dt>배송비</dt>
            <dd>{shipping.shippingPrice}</dd>
          </Styled.Dl>
          <Styled.Dl>
            <dt>배송 안내</dt>
            <dd>{shipping.shippingBasis}원 이상 구매시 무료배송</dd>
          </Styled.Dl>
          <Styled.Dl>
            <dt style={{ margin: 'auto 0' }}>상품 선택</dt>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small" style={{ margin: 0 }}>
              <Select
                value={selectedItem}
                onChange={handleChangeSelectBox}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue={0}
              >
                <MenuItem style={{ display: 'none' }} value={0}>
                  상품을 선택해주세요
                </MenuItem>
                {option.map(item => (
                  <MenuItem key={`select-item-${item.optionId}`} value={item.optionName}>
                    <Styled.MenuItemDiv>
                      <div>{item.optionName}</div>
                      <div>{handleFormatPrice(item.optionPrice)}원</div>
                    </Styled.MenuItemDiv>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Styled.Dl>
          {productListToBuy.length > 0 &&
            productListToBuy.map((item, idx) => (
              <Styled.DivGroup key={`product-${idx + 1}`}>
                <div>
                  <span>{item.optionName}</span>
                  <button
                    className="close-btn"
                    onClick={handleCloseOptionBox}
                    value={item.optionName}
                  >
                    <img src={closeIcon} alt="상품 옵션 삭제 아이콘" />
                  </button>
                </div>
                <div className="detail">
                  <div className="btn-group">
                    <button
                      disabled={item.quantity === 1 ? true : false}
                      onClick={handleCalculateNum}
                      value={item.optionName}
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button onClick={handleCalculateNum} value={item.optionName}>
                      +
                    </button>
                  </div>
                  <div>{handleFormatPrice(item.optionPrice)}원</div>
                </div>
              </Styled.DivGroup>
            ))}
        </div>
        <div>
          <Styled.SpanGroup>
            <span>총 상품 가격:</span>
            <span>{handleFormatPrice(totalPrice())}</span>
            <span>원</span>
          </Styled.SpanGroup>
          <Styled.AdditionDiv>{additionalShippingDescription()}</Styled.AdditionDiv>
          <Styled.ButtonGroup>
            {isLikeClicked ? (
              <img src={clickedLikeIcon} alt="좋아요 클릭한 아이콘" onClick={handleClickLike} />
            ) : (
              <img src={likeIcon} alt="좋아요 클릭 전 아이콘" onClick={handleClickLike} />
            )}
            <button onClick={handleSubmit}>구매하기</button>
            <button>장바구니</button>
          </Styled.ButtonGroup>
        </div>
      </Styled.Div>
    </Styled.Container>
  );
};

export default ProductDetail;
