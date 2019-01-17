import React, { Component } from 'react';

import Payment from '../Payment/Payment';
import'./checkout.css';

class Checkout extends Component {
    render() {
        return (
            <div>
                    <div className="checkout-container">
                    Checking out: here the user should provide billing (using map api, should pull the shipping info. ) info along with payment info. 
                    once the user has proveided the above info, a review info button should display all of the proveded info and give the user the option to edit any info before order submition.
                    <Payment />
                    </div>

                 
                    
                   
            </div>
        );
    }
}

export default Checkout;