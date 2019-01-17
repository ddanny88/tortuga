import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Registration from './components/Registration/Registration';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


export default (
    <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/register" component={ Registration } />
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
    </Switch>
);