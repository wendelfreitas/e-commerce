import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Details = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  /* justify-content: ${props => (props.loading ? 'center' : 'space-between')}; */

  width: 50%;

  strong {
    font-size: 35px;
    color: black;
  }
  small {
    font-size: 25px;
    color: #b3b3b3;
  }
  b {
    margin-top: 70px;
    font-size: 50px;
    color: #37bea9;
  }

  button {
    margin-top: 15px;
    background: #39c6b1;
    border: 0;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
      background: #34b29f;
    }
    b {
      font-size: 15px;
      color: white;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  height: 400px;
  width: 50%;
  border: 1px;
  border-style: solid;
  border-color: #e3e3e3;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    max-height: 350px;
  }
`;
