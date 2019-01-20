// Calculates total excluding tax:
const calcBase = (cart) => {
    if(!cart){
        return;
    }
    let base = cart.reduce((accumulator, element) => {
        return accumulator + (+element.price);
    }, 0)
    return base;
}
//Calculates tax based on total: 
const calcTax = (cart) => {
    let tax = calcBase(cart) * 0.0825;
    return tax;
}
//calculates the total cart: 
const calcTotal = (cart) => {
    let total = calcTax(cart) + calcBase(cart);
   return total;
}

//gets the cart full of items.
const getCart = (req, res) => {
    // console.log(req.session.cart)
    res.status(200).json(req.session.cart);
}

// adds item to the cart.
const addToCart = (req, res) => {
    let cartArray = [...req.session.cart, req.body]
    let tax  = calcTax(cartArray).toFixed(2);
    let total  = calcTotal(cartArray).toFixed(2);
    req.session.cart.push({...req.body, tax, total});

    console.log('current req.session.cart: ', req.session.cart);
    res.status(200).json( req.session.cart);
}

// removes item form the cart.
const removeItem = (req, res) => {
    const { cart } = req.session;
    for(let i = 0; i < cart.length; i++){
        if(+cart[i].product_id === +req.params.id){
            cart.splice(i, 1);
        } 
    }
    res.status(200).json(req.session.cart)
}



module.exports = {
    addToCart,
    getCart,
    removeItem
}
