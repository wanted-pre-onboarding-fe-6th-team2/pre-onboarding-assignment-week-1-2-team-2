import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 1200px;
  height: 580px;
  margin: 50px auto;
  background-color: #fff;
`;

const LabelContainer = styled.label`
  margin: 0 10px 0 10px;
  width: 80px;
  background-color: black;
  color: white;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
`;

const FormContainer = styled.form`
  width: 80%;
  padding: 10px;
  margin: 10px auto;
  background-color: lightgrey;
  border-radius: 10px;
`;

const ListItemContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.input`
  width: 80%;
  height: 25px;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
`;

const SelectDisplay = styled.select`
  width: 80%;
  height: 25px;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
`;

const TextareaContainer = styled.textarea`
  width: 80%;
  height: 40px;
  border: none;
  overflow: auto;
  outline: none;
  padding: 10px 0 0 10px;
  box-shadow: none;
  border-radius: 10px;
  resize: none;
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin: 30px 0;
`;

const OptionMap = styled.div`
  width: 80%;
`;

const OptionContainer = styled.div`
  width: 100%;
  //margin: 20px auto;
  display: flex;
  align-items: center;
`;

const OptionListContainer = styled.div`
  width: 70%;
`;

const AddOptionButton = styled.button`
  background-color: #4b76f8;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    background-color: #1a4ce3;
  }
`;

const InputSubmit = styled.input`
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  :hover {
    background-color: #212121;
  }
`;

const StyledLink = styled(Link)`
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  :hover {
    background-color: #212121;
  }
  text-decoration: none;
`;

const ListFooterContainer = styled.div`
  width: 50%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export {
  Container,
  LabelContainer,
  FormContainer,
  ListItemContainer,
  InputContainer,
  SelectDisplay,
  TextareaContainer,
  Title,
  OptionContainer,
  OptionMap,
  OptionListContainer,
  AddOptionButton,
  InputSubmit,
  StyledLink,
  ListFooterContainer,
};
