import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Preview, Details } from './styles';
import { Creators as ProductActions } from '../../store/ducks/product';

class Product extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getProductRequest: PropTypes.func.isRequired,
    product: PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.string,
      }),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };
  componentDidMount() {
    this.loadProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadProduct();
    }
  }
  loadProduct = () => {
    const { id } = this.props.match.params;
    this.props.getProductRequest(id);
  };
  render() {
    return (
      <Container>
        <Preview>
          <img src={this.props.product.data.image} alt={this.props.product.data.name} />
        </Preview>
        <Details>
          <strong>{this.props.product.data.name}</strong>
          <small>{this.props.product.data.brand}</small>
          <b>{`R$ ${this.props.product.data.price}`}</b>
          <button>
            <b>ADICIONAR AO CARRINHO</b>
          </button>
        </Details>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  product: state.product,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);