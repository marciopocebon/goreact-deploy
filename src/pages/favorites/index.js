import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Favorites = ({ favorites }) => (
  <ul>
    {favorites.data.map(favorite => (
      <li key={favorite.id}>
        <p>
          <strong>{favorite.name}</strong> ({favorite.description})
        </p>
        <a href={favorite.url}>Acessar</a>
      </li>
    ))}
  </ul>
);

Favorites.propTypes = {
  favorites: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
