import React, { Component } from 'react';
import Product from '../Product/Products';

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard stuff here
                <Product />
            </div>
        );
    }
}

export default Dashboard;