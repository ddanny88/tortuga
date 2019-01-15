require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const authController = require('./controllers/auth_controller');
const proController = require('./controllers/prod_controller');
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
app.post('/api/addToCart');
app.get('/api/getCart');








const PORT = 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
