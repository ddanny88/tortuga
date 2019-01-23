import React, { Component } from 'react';
import'./checkout.css';
import CheckoutReceipt from '../Checkout_receipt/CheckoutReceipt';
import FinalCheckout from '../FinalCheckout/FinalCheckout';


class Checkout extends Component {
    render() {
        return (
            <div className="main-checkout">
                <FinalCheckout />
                <CheckoutReceipt />
            </div>
        );
    }
}

export default Checkout;