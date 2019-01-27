import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Admin from './components/Admin/Admin';
import Receipt from './components/Receipt/Receipt';
import Slider from './components/Slider/Slider';


export default (
    <Switch>
        <Route exact path="/" component={ Dashboard } />
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/login/admin" component={ Admin } />
        <Route path="/receipt" component={Receipt} />
        <Route path="/slider" component={ Slider } />
    </Switch>
);