import React from 'react';
import { Container, Title, Cart } from './styles';

const Header = () => (
  <Container>
    <Title>Wen-commerce</Title>
    <Cart>
      <small>Meu carrinho (3)</small>
    </Cart>
  </Container>
);

export default Header;
