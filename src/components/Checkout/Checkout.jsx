import React, { Component } from 'react';

import Payment from '../Payment/Payment';
import'./checkout.css';

class Checkout extends Component {
    render() {
        return (
            <div>
                <div className="checkout-container">
                    <input />
                    <input />
                    <input />
                    <input />
                    <input />
                <hr/>
                    <Payment />
                </div>
            </div>
        );
    }
}

export default Checkout;