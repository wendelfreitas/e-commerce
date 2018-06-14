import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Item = props => (
  <Container to={`/product/${props.item.id}`}>
    <img src={props.item.image} alt={props.item.name} />
    <strong>{props.item.name}</strong>
    <small>{props.item.brand}</small>
    <b>{`R$ ${props.item.price}`}</b>
  </Container>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Item;
