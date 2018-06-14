import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Title, Cart } from './styles';

const Header = props => (
  <Container>
    <Title to="/">Wen-commerce</Title>
    <Cart to="/cart">
      <small>Meu carrinho ({props.cart})</small>
    </Cart>
  </Container>
);

const mapStateToProps = state => ({
  cart: state.cart.data.length,
});

Header.propTypes = {
  cart: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
