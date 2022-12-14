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
      <Styled.Title>?????? ??????</Styled.Title>
      <Styled.FormContainer>
        <ListItem
          id="name"
          name="name"
          labelName="?????????"
          type="text"
          placeholder="???????????? ???????????????"
          value={name}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="price"
          name="price"
          labelName="??????"
          type="number"
          placeholder="????????? ???????????????"
          value={price}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="discountRate"
          name="discountRate"
          labelName="?????????"
          type="number"
          placeholder="???????????? ???????????????"
          value={discountRate}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="origin"
          name="origin"
          labelName="?????????"
          type="text"
          placeholder="???????????? ???????????????"
          value={origin}
          onChange={inputProductInfoHandler}
        />
        <Styled.ListItemContainer>
          <Styled.LabelContainer>?????? ??????</Styled.LabelContainer>
          <Styled.SelectDisplay>
            <option name="isDisplay" value={true}>
              ?????? ????????? ??????
            </option>
            <option name="isDisplay" value={false}>
              ?????? ????????? ????????????
            </option>
          </Styled.SelectDisplay>
        </Styled.ListItemContainer>
        <Styled.ListItemContainer>
          <Styled.LabelContainer>?????? ??????</Styled.LabelContainer>
          <Styled.TextareaContainer placeholder="????????? ?????? ????????? ???????????????" />
        </Styled.ListItemContainer>
        <ListItem
          id="shippingPrice"
          name="shippingPrice"
          labelName="?????????"
          type="number"
          placeholder="???????????? ???????????????"
          // value={shippingPrice}
          onChange={inputProductInfoHandler}
        />
        <ListItem
          id="shippingBasis"
          name="shippingBasis"
          labelName="????????????"
          type="number"
          placeholder="?????? ?????? ????????? ?????? ???????????? ???????????????"
          //value={shippingBasis}
          onChange={inputProductInfoHandler}
        />
        <Styled.ListItemContainer>
          <Styled.LabelContainer>??????</Styled.LabelContainer>
          <Styled.OptionMap>
            <Styled.OptionContainer>
              <Styled.OptionListContainer>
                <div>
                  <ListItem
                    id="optionName"
                    name="optionName"
                    labelName="?????????"
                    type="text"
                    placeholder="???????????? ???????????????"
                    onChange={inputProductInfoHandler}
                  />
                </div>
                <div>
                  <ListItem
                    id="optionPrice"
                    name="optionPrice"
                    labelName="????????????"
                    type="number"
                    placeholder="????????? ????????? ???????????????"
                    onChange={inputProductInfoHandler}
                  />
                  <ListItem
                    id="optionStock"
                    name="optionStock"
                    labelName="????????????"
                    type="number"
                    placeholder="????????? ????????? ???????????????"
                    onChange={inputProductInfoHandler}
                  />
                </div>
              </Styled.OptionListContainer>
              <div>
                <label htmlFor="checkBox">??????</label>
                <input id="checkBox" type="checkbox" checked />
              </div>
              <Styled.AddOptionButton onClick={addOptionHandler}>?????? ??????</Styled.AddOptionButton>
            </Styled.OptionContainer>
            {addOption}
          </Styled.OptionMap>
        </Styled.ListItemContainer>
        <ListItem
          id="imageUrl"
          name="imageUrl"
          labelName="?????? ?????????"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={inputProductInfoHandler}
        />
      </Styled.FormContainer>
      {/* TODO: ????????? ?????? Merge ?????? ?????? ?????? */}
      <Styled.ListFooterContainer>
        <Styled.StyledLink to="/admin">????????????</Styled.StyledLink>
        <Styled.InputSubmit
          type="submit"
          value="?????? ????????????"
          onClick={() => handleChangeCheckBox(productData)}
        />
      </Styled.ListFooterContainer>
    </Styled.Container>
  );
};

export default Register;
