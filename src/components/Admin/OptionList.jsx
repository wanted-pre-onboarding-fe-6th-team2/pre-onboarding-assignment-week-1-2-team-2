import * as Styled from '@/components/Admin/Register.styled';
import ListItem from '@/components/Admin/RegisterList';

const OptionContainer = props => {
  return (
    <Styled.OptionContainer key={Math.random()}>
      <Styled.OptionListContainer>
        <div>
          <ListItem
            id="optionName"
            name="optionName"
            labelName="옵션명"
            type="text"
            placeholder="옵션명을 입력하세요"
          />
        </div>
        <div>
          <ListItem
            id="optionPrice"
            name="optionPrice"
            labelName="옵션가격"
            type="number"
            placeholder="옵션의 가격을 입력하세요"
          />
          <ListItem
            id="optionStock"
            name="optionStock"
            labelName="옵션재고"
            type="number"
            placeholder="옵션의 재고를 입력하세요"
          />
        </div>
      </Styled.OptionListContainer>
      <div>
        <label htmlFor="checkBox">필수</label>
        <input id="checkBox" type="checkbox" />
      </div>
    </Styled.OptionContainer>
  );
};

export default OptionContainer;
