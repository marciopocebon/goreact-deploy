import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Main</Link>
    <Link to="/favorites">Favorites</Link>
  </header>
);

export default Header;
