const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(stripeSecretKey);
//Publishable pk_test_I1su1HpYzoQpKkC2Dt3xFHnB
// Secret     sk_test_9MInTLfiA9vTcJbOoKliL6ay



// the amount has to be dynamic, when the total (including tax) comes through off of the request, tht will be the payment due. 
const total = 55.00 //ex
//the payment amount should come off of the req.body
// look at the token, the address info, billing and shipping should go into the database. 




const takePayment = (req, res) => {
    const token = req.body.token;
    // console.log('The token on the back-end', token)

    const charge = stripe.charges.create({
        amount: `${total}`,
        currency: "USD",
        description: 'Alcohol Delivery Charge',
        source: token.id
    })
    .then( () => {
        res.status(200).json(charge)
    })
}

module.exports = {
    takePayment
}



// const configureStripe = require('stripe');
// const stripe = configureStripe(process.env.STRIPE_SECRET);

// const postStripeCharge = res => (stripeErr, stripeRes) => {
  
//   if (stripeErr) {
//     res.status(500).send({ Error: stripeRes });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

// const paymentApi = app => {
//   app.post('/createcharge', (req, res) => {
//     stripe.charges.create(req.body, postStripeCharge(res))
//   });

//   return app;
// };

// const configureRoutes = app => {
//   paymentApi(app);
// };

// module.exports = configureRoutes;