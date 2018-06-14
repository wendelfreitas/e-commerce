import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Nav, Item } from './styles';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

class Menu extends Component {
  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.loadCategories();
  }
  loadCategories = () => {
    this.props.getCategoriesRequest();
  };

  render() {
    return (
      <Container>
        <Nav>
          {this.props.categories.loading ? (
            <b>Carregando...</b>
          ) : (
            this.props.categories.data.map(category => (
              <li key={category.id}>
                <Item selected to={`/category/${category.id}`}>
                  <b>{category.title}</b>
                </Item>
              </li>
            ))
          )}
        </Nav>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoriesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
