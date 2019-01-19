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
    console.log('The token on the back-end', token)

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

