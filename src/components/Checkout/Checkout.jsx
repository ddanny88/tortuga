import React, { Component } from 'react';

import Payment from '../Payment/Payment';
import'./checkout.css';

class Checkout extends Component {
    render() {
        return (
            <div>
                <div className="checkout-container">
                   
                       <label>Address</label>
                        <input />

                        <label>City</label>
                        <input />

                        <label>State</label>
                        <input />

                        <label>Zipcode</label>
                        <input />

                        <label>Phone</label>
                        <input type="phone" />

                        <button className="checkout-btn">submit</button>
                    <Payment />
                <hr/>
                </div>
            </div>
        );
    }
}

export default Checkout;