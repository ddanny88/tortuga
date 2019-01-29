import React, { Component } from 'react';
import './receipt.css';

class Receipt extends Component {
    render() {
        return (
            <div className="receipt-container">
            <h2>Thank you for your purchase!</h2>
               <div>
                <img src="https://s3.us-east-2.amazonaws.com/tortuga-assets/pirate-ship.png" 
                alt="ship"
               />
               </div>
            </div>
        );
    }
}

export default Receipt;