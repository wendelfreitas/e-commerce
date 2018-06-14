import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  width: 100%;
  padding: 0 20px;
  color: white;
  background: red;
  margin: 0 0 10px;
  font-size: 13px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    cursor: pointer;
    background: transparent;
    color: white;
    img {
      height: 14px;
    }
  }
`;
