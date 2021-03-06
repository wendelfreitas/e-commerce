import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Showcase from '../pages/showcase';
import Product from '../pages/product';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/category/:id" component={Showcase} />
    <Route path="/product/:id" component={Product} />
  </Switch>
);

export default Routes;
