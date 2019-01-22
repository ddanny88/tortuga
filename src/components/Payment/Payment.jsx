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



// const CURRENCY = 'USD';

// const fromDollarToCent = amount => amount * 100;

// // const successPayment = data => {
// //   window.location.assign(`${process.env.REACT_APP_PATH}/#/cart`)
// // };

// const onToken = (amount, description, email, toggleShow) => token =>
//   axios.post(`/createcharge`,
//     {
//       description,
//       source: token.id,
//       currency: CURRENCY,
//       receipt_email: email,
//       amount: fromDollarToCent(amount)
//     })
//     .then(()=>{
//     // successPayment()
//     toggleShow()})
//     .catch(()=>{
//     // successPayment()
//     toggleShow()});

// const Checkout = ({ name, description, amount, email, toggleShow }) =>{
//    return (
//     <StripeCheckout
//     name={name}
//     description={description}
//     amount={fromDollarToCent(amount)}
//     token={onToken(amount, description, email, toggleShow)}
//     currency={CURRENCY}
//     stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
//   />)}


// export default Checkout;