import * as Styled from '@/components/Admin/Register.styled';
const ListItem = ({ id, labelName, onChange, type, placeholder, accept, value }) => {
  return (
    <Styled.ListItemContainer>
      <Styled.LabelContainer htmlFor={id}>{labelName}</Styled.LabelContainer>
      <Styled.InputContainer
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        accept={accept}
        required
        value={value}
        name={id}
      />
    </Styled.ListItemContainer>
  );
};

export default ListItem;
