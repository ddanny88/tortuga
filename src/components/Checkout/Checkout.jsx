import React, { Component } from 'react';
import'./checkout.css';
import CheckoutCard from '../CheckoutCard/CheckoutCard';
import CheckoutReceipt from '../Checkout_receipt/CheckoutReceipt';


class Checkout extends Component {
    render() {
        return (
            <div className="main-checkout">
                <CheckoutCard />
                <CheckoutReceipt />
            </div>
        );
    }
}

export default Checkout;