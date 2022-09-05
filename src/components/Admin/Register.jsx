import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from '@/components/Admin/Register.styled';
import ListItem from '@/components/Admin/RegisterList';
import OptionList from '@/components/Admin/OptionList';

const Register = () => {
  const dispatch = useDispatch();
  const handleChangeCheckBox = product => {
    dispatch({ type: 'product/add', payload: { ...product } });
  };
  const [addOption, setAddOption] = useState([]);
  const [inputProductInfo, setInputProductInfo] = useState({
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    origin: '',
    price: 0,
    discountRate: 0,
    isDisplay: true,
  });

  const [inputShipping, setInputShipping] = useState({
    shippingPrice: 0,
    shippingBasis: 0,
  });

  const [inputOptionData, setInputOptioData] = useState({
    optionId: Math.random(),
    optionName: '',
    optionPrice: 0,
    optionStock: 0,
  });

  const { id, imageUrl, name, description, origin, price, discountRate, isDisplay } =
    inputProductInfo;

  const addOptionHandler = e => {
    setAddOption(prev => [...prev, OptionList()]);
  };
  const inputProductInfoHandler = e => {
    const { value, name } = e.target;
    e.preventDefault();
    if (name === 'shippingPrice' || 'shippingBasis') {
      return setInputShipping(prev => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
    if (name === 'optionName' || 'optionPrice' || 'optionStock') {
      return setInputOptioData(prev => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
    setInputProductInfo(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const productData = {
    id: id,
    imageUrl: imageUrl,
    name: name,
    description: description,
    origin: origin,
    shipping: {
      shippingPrice: inputShipping.shippingPrice,
      shippingBasis: inputShipping.shippingBasis,
    },
    option: {
      optionId: inputOptionData.optionId,
      optionName: inputOptionData.optionName,
      optionPrice: inputOptionData.optionPrice,
      optionStock: inputOptionData.optionStock,
    },
    price: price,
    discountRate: discountRate,
    isDisplay: isDisplay,
  };

  return (
    <Styled.Container>
      <Styled.Title>상품 등록</Styled.Title>
      <Styled.FormContainer>
        <ListItem
          id="name"
          name="name"
          labelName="상품명"
          type="text"
          placeholder="상품명을 입력하세요"
          value={name}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="price"
          name="price"
          labelName="가격"
          type="number"
          placeholder="가격을 입력하세요"
          value={price}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="discountRate"
          name="discountRate"
          labelName="할인율"
          type="number"
          placeholder="할인율을 입력하세요"
          value={discountRate}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="origin"
          name="origin"
          labelName="원산지"
          type="text"
          placeholder="원산지를 입력하세요"
          value={origin}
          onChange={inputProductInfoHandler}
        />
        <Styled.ListItemContainer>
          <Styled.LabelContainer>노출 여부</Styled.LabelContainer>
          <Styled.SelectDisplay>
            <option name="isDisplay" value={true}>
              판매 페이지 노출
            </option>
            <option name="isDisplay" value={false}>
              판매 페이지 노출안함
            </option>
          </Styled.SelectDisplay>
        </Styled.ListItemContainer>
        <Styled.ListItemContainer>
          <Styled.LabelContainer>상세 설명</Styled.LabelContainer>
          <Styled.TextareaContainer placeholder="상품의 상세 설명을 적어주세요" />
        </Styled.ListItemContainer>
        <ListItem
          id="shippingPrice"
          name="shippingPrice"
          labelName="배송비"
          type="number"
          placeholder="배송비를 입력하세요"
          // value={shippingPrice}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="shippingBasis"
          name="shippingBasis"
          labelName="배송기준"
          type="number"
          placeholder="무료 배송 기준이 되는 배송비를 입력하세요"
          //value={shippingBasis}
          onChange={inputProductInfoHandler}
        />
        <Styled.ListItemContainer>
          <Styled.LabelContainer>옵션</Styled.LabelContainer>
          <Styled.OptionMap>
            <Styled.OptionContainer>
              <Styled.OptionListContainer>
                <div>
                  <ListItem
                    id="optionName"
                    name="optionName"
                    labelName="옵션명"
                    type="text"
                    placeholder="옵션명을 입력하세요"
                    onChange={inputProductInfoHandler}
                  />
                </div>
                <div>
                  <ListItem
                    id="optionPrice"
                    name="optionPrice"
                    labelName="옵션가격"
                    type="number"
                    placeholder="옵션의 가격을 입력하세요"
                    onChange={inputProductInfoHandler}
                  />
                  <ListItem
                    id="optionStock"
                    name="optionStock"
                    labelName="옵션재고"
                    type="number"
                    placeholder="옵션의 재고를 입력하세요"
                    onChange={inputProductInfoHandler}
                  />
                </div>
              </Styled.OptionListContainer>
              <div>
                <label htmlFor="checkBox">필수</label>
                <input id="checkBox" type="checkbox" checked />
              </div>
              <Styled.AddOptionButton onClick={addOptionHandler}>옵션 추가</Styled.AddOptionButton>
            </Styled.OptionContainer>
            {addOption}
          </Styled.OptionMap>
        </Styled.ListItemContainer>
        <ListItem
          id="imageUrl"
          name="imageUrl"
          labelName="상품 이미지"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={inputProductInfoHandler}
        />
      </Styled.FormContainer>
      {/* TODO: 상수화 파일 Merge 이후 수정 필요 */}
      <Styled.ListFooterContainer>
        <Styled.StyledLink to="/admin">취소하기</Styled.StyledLink>
        <Styled.InputSubmit
          type="submit"
          value="상품 등록하기"
          onClick={() => handleChangeCheckBox(productData)}
        />
      </Styled.ListFooterContainer>
    </Styled.Container>
  );
};

export default Register;
