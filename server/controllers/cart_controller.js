// adds item to the cart.
const addToCart = (req, res) => {
    req.session.cart.push(req.body);
    console.log('current req.session.cart: ', req.session.cart);
    res.status(200).json(req.session.cart);
}
//gets the cart full of items.
const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}
// removes item form the cart.
const removeItem = (req, res) => {
    const { cart } = req.session;
    for(let i=0; i < cart.length; i++){
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
