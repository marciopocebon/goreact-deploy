import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Main from '../pages/main';
import Favorites from '../pages/favorites';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/favorites" component={Favorites} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
