import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleAddRepository}>
        <input
          placeholder="usuário/repositório"
          value={this.state.repositoryInput}
          onChange={e => this.setState({ repositoryInput: e.target.value })}
        />

        <button type="submit">Adicionar</button>

        {this.props.favorites.loading && <span>Carregando...</span>}
        {!!this.props.favorites.error && (
          <span style={{ color: '#F00' }}>{this.props.favorites.error}</span>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
