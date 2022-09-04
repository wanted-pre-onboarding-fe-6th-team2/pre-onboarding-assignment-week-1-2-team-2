import styled from '@emotion/styled';

const Container = styled.div`
  width: 1200px;
  height: 580px;
  margin: 50px auto;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin: 30px 0;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 50px;

  h4 {
    font-size: 18px;
    font-weight: 500;
  }

  button {
    margin-left: auto;
  }
`;

const Table = styled.table`
  width: 1100px;
  font-size: 0.9rem;
  border-spacing: 0;
  border-collapse: collapse;
  border-bottom: 1px solid #e5e5e5;
  margin: auto;
  margin-bottom: 1rem;
  word-wrap: break-word;

  &,
  th,
  td {
    text-align: center;
    vertical-align: middle;
    border-top: 1px solid #e5e5e5;
  }
  th {
    padding: 10px 0;
  }
  td {
    padding: 8px 0;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;

  div {
    flex: 1;
  }
`;

const Button = styled.button`
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

const DeleteButton = styled.button`
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

export { Container, Title, Table, TableHeader, OptionContainer, Button, DeleteButton };
