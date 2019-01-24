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


const checkoutInfo = (req, res) => {
    const db = req.app.get('db');
    const {  phone, address, city, st, zipcode } = req.body;
        db.checkout_info(phone, address, city, st, zipcode)
        .then( response => {
            console.log(response)
            let checkoutInfo = response[0];

            req.session.user = {
                ...req.session.user,
                address: checkoutInfo.address, 
                city: checkoutInfo.city,
                state: checkoutInfo.state,
                zipcode: checkoutInfo.zipcode,
                orderNumber: checkoutInfo.checkout_id,
                dateOrdered: checkoutInfo.order_date,
                phone: checkoutInfo.phone,
                checkoutId: checkoutInfo.checkout_id
            }
            console.log(req.session.user)
            res.status(200).json(req.session);
        })
        .catch(err => {
            console.log(err)
        })
}


// add the updated info to the session:
const updateCheckout = (req, res) => {
    const db = req.app.get('db');
    const { phone , address, city, st, zipcode } = req.body;
    db.update_checkout(phone, address, city, st, zipcode, req.params.id)
        .then( response => {
            let updatedInfo = response[0];
            console.log(updatedInfo)

            req.session.user = {
                ...req.session.user,
                phone: updatedInfo.phone,
                address: updatedInfo.address,
                city: updatedInfo.city,
                state: updatedInfo.state,
                zipcode: updatedInfo.zipcode
            }
            res.status(200).json(req.session)
        })
        .catch( err => {
            console.log(err);
        })
}

module.exports = {
    takePayment, 
    checkoutInfo, 
    updateCheckout
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