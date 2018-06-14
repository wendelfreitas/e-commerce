import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  margin-top: 100px;
  width: 50px;
  height: 50px;
  animation: ${rotate360} 2s linear infinite;
`;
