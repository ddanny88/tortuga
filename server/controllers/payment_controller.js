const stripe = require('stripe')("sk_test_9MInTLfiA9vTcJbOoKliL6ay");


//Publishable pk_test_I1su1HpYzoQpKkC2Dt3xFHnB
// Secret     sk_test_9MInTLfiA9vTcJbOoKliL6ay



// the amount has to be dynamic, when the total (including tax) comes through off of the request, tht will be the payment due. 

const total = 55.00 //ex
const takePayment = (req, res) => {
    
    const token = req.body.token;
    console.log(token)

    const charge = stripe.charges.create({
        amount: `${total}`,
        currency: "USD",
        description: 'Alcohol Delivery',
        source: token.id
    })
    .then(()=> {
        res.status(200).json(charge)
    })
}

module.exports = {
    takePayment
}