
const addToCart = (req, res) => {
    req.session.cart.push(req.body);
    console.log(req.session.cart);
    res.status(200).json(req.session.cart);
}

const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}

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
