require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const authController = require('./controllers/auth_controller');
const proController = require('./controllers/prod_controller');
const cc = require('./controllers/cart_controller');
const { checkCart } = require('./middleware/authMiddleware');
// const auth = require('./middleware/authMiddleware');


const app = express();
app.use(json());

//connecting to the databse:
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DATABASE CONNECTED.");
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);




// AUTHORIZATION: 
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register);
app.get('/api/auth/signout', authController.signOut);


// PRODUCTS:
app.get('/api/products', proController.getProducts);



//CART: 

//before anything can be added to the cart, checkCart middleware is fired to check if the session contains cart, if false req.session.cart is initiated. In order to get the cart, the req.session.cart needs to exist therefor it is checked again. 
app.post('/api/addtocart', checkCart, cc.addToCart);
app.get('/api/getcart', checkCart, cc.getCart);



//CHECKOUT:
// before the user can checkout, the user must be logged in and put on session. 









const PORT = 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
