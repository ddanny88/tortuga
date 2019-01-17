import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
 
export default class Payment extends Component {

  onToken = (token) => {
      console.log(token)
      axios.post('/api/charge', { token })
        .then( response => {
            console.log(response)
        })
        .catch( err => {
            console.log(`**${err}**`)
        })
  }
 
  render() {
    return (
        <div className="payment-btn">
            <StripeCheckout
                amount={1000000}
                name="Tortuga"
                billingAddress
                zipCode={true}
                description="Alcohol Delivery"
                currency='USD'
                allowRememberMe={false}
                token={this.onToken}
                stripeKey="pk_test_I1su1HpYzoQpKkC2Dt3xFHnB"
            />

            
        </div>

    )
  }
}



// onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }