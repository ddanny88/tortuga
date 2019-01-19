import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 
class Payment extends Component {

  onToken = (token) => {
      console.log('this is the token', token)
      axios.post('/api/charge', { token })
        .then( response => {
            console.log('this is the response', response)
        })
        .catch( err => {
            console.log(`**${err}**`)
        })
  }
 
  render() {
    return (
        <div className="payment-btn">
            <StripeCheckout
                name="Tortuga"
                description="Alcohol Delivery"
                panelLabel="complete purchase"
                // amount={} //cents
                currency='USD'
                billingAddress={true}
                zipCode={true}
                allowRememberMe={true}
                token={this.onToken}
                stripeKey="pk_test_I1su1HpYzoQpKkC2Dt3xFHnB"
            />
        </div>
    )
  }
}

export default Payment;

