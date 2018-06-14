import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from '../../components/Item';
import Loading from '../../components/Loading';
import { Creators as ItensActions } from '../../store/ducks/itens';
import { Container } from './styles';

class Home extends Component {
  static propTypes = {
    getItensRequest: PropTypes.func.isRequired,
    itens: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };
  componentDidMount() {
    this.props.getItensRequest(null);
  }

  render() {
    return (
      <Container loading={this.props.itens.loading}>
        {this.props.itens.loading ? (
          <Loading />
        ) : (
          this.props.itens.data.map(item => <Item key={item.id} item={item} />)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  itens: state.itens,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ItensActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
