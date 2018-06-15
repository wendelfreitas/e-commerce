import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';
import { ItemList, Container, Price } from './styles';

const Cart = props => (
  <Container>
    <ItemList visible={props.cart.data.length > 0}>
      <thead>
        <th />
        <th>Produto</th>
        <th> Valor</th>
        <th> QTD</th>
        <th> SUBTOTAL</th>
        <th />
      </thead>
      <tbody>
        {props.cart.data ? (
          props.cart.data.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <p>{item.name}</p>
                <small>{item.brand}</small>
              </td>
              <td>
                <strong>R$ {item.price}</strong>
              </td>
              <td>
                <input
                  id="number"
                  type="number"
                  onChange={event => props.productQuantity(item, event.target.value)}
                  min="1"
                  value={item.quantity}
                  max="99"
                />
              </td>
              <td>
                <strong>R$ {item.subtotal.toFixed(2)}</strong>
              </td>
              <td>
                <button onClick={() => props.CartRemove(item)}>
                  <img
                    src="http://www.myiconfinder.com/uploads/iconsets/256-256-486a9b90c52d4de7be5c625acc8836a9.png"
                    alt="close"
                  />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Carrinho vazio</td>
          </tr>
        )}
      </tbody>
    </ItemList>
    <Price>
      <strong>
        Total <b>R$ {props.total}</b>
      </strong>
    </Price>
  </Container>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      price: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      image: PropTypes.string,
    })),
  }).isRequired,
  total: PropTypes.number.isRequired,
};

function calculate(products) {
  const sum = products
    .map(product => product.subtotal)
    .reduce((total, amount) => total + amount, 0);
  return sum.toFixed(2);
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: calculate(state.cart.data),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
