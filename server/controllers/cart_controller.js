
const addToCart = (req, res) => {
    req.session.cart.push(req.body);
    console.log(req.session.cart);
    res.status(200).json(req.session.cart);
}

const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}
module.exports = {
    addToCart,
    getCart
}
