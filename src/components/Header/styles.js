import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Link)`
  display: flex;
  font-weight: bold;
  font-size: 45px;
  text-decoration: none;
  color: salmon;
`;

export const Cart = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline #b3b3b3;
  }

  display: flex;

  small {
    color: #b3b3b3;
  }
`;
