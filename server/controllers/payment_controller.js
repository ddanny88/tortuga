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
    const { user_id } = req.session.user;
    // console.log(req.session.user)
        db.checkout_info(phone, address, city, st, zipcode, user_id) //need user_id 
        .then( response => {
            // console.log(response)
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
            // console.log(updatedInfo)

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


const orderInfo = (req, res) => {    
    const db = req.app.get('db');

    let total = req.session.cart[req.session.cart.length - 1].total;
    let cart = req.session.cart;
    let checkoutID = req.session.user.checkoutId;
    let category = '';
    for (let i = 0; i < cart.length; i++) {
         if(cart[i].category){
            category += `${req.session.cart[i].category}`;
            if(i < cart.length - 1){
                category += ",";
            }
         }
    }

    db.order_info(category, total, checkoutID)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( err => {
            console.log(err);
        });
}


// used in cart.js needs sum function 
const getOrderInfo = (req, res) => {
    const db = req.app.get('db');

    db.get_order_deets(req.body.orderId)
        .then( response => {
            let order = response[0];
            console.log(order)
            res.status(200).json(order)
        })
        .catch( err => {
            console.log(err);
        });
}       


//RETURNS AN ARRAY OF category counts: 
const getProductCategories = (req, res) => {
    const db = req.app.get('db');

    db.get_product_categories()
        .then(response => {
            let categoryArray = [];
            for(let i=0; i < response.length; i++){
                categoryArray = categoryArray.concat(response[i].product_category.split(','));
            }
            let wineCount = 0;
            let beerCount = 0;
            let liquorCount = 0;
            
            for(let i=0; i< categoryArray.length; i++){
                if(categoryArray[i] === 'Wine'){
                    wineCount = wineCount + 1;
                } else if(categoryArray[i] === 'Beer'){
                    beerCount = beerCount + 1;
                } else if(categoryArray[i] === 'Liquor')
                    liquorCount = liquorCount + 1;
                }
               

            let chartData = {
                    labels: ['Liquor', 'Wine', 'Beer'],
                    datasets: [
                        {
                            label: 'YTD Quantity Sold',
                            data: [liquorCount, wineCount, beerCount],
                            backgroundColor:[
                                "rgba(255,99,123,0.6)",
                                "rgba(255,159,64,0.6)",
                                "rgba(75,192,192,0.6)"
                            ]
                        }
                    ]
                }
            res.status(200).json(chartData);
        })
        .catch(err => {
            console.log(err)
        })
}





module.exports = {
    takePayment, 
    checkoutInfo, 
    updateCheckout,
    orderInfo,
    getOrderInfo,
    getProductCategories, 
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