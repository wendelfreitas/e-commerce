import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height: 350px;
  width: 265px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-style: solid;
  border-color: #d9d9d9;
  text-decoration: inherit;
  border-width: 1px;
  border-radius: 5px;
  cursor: pointer;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  strong {
    font-size: 22px;
    color: black;
  }

  small {
    color: #b3b3b3;
  }

  b {
    font-size: 30px;
    color: #37bea9;
  }
`;
