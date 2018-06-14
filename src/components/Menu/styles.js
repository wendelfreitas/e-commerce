import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 15px 0;
  padding: 0 20px;
  flex: 1;
  height: 50px;
  background: salmon;
  border-radius: 5px;
  align-items: center;
`;

export const Nav = styled.ul`
  list-style: none;
  b {
    color: white;
  }
  li {
    float: left;
    margin: 10px;
  }
`;

export const Item = styled(Link)`
  text-decoration: none;

  b {
    color: ${props => (props.selected ? 'white' : '#cccccc')};
    cursor: pointer;
  }
`;
