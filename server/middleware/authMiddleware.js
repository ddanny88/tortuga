

// checks if the user is on session, if not, they are told to login. 
const checkUser = (req, res, next) => {
    if(!req.session.user){
        res.status(401).json('PLEASE LOGIN.');
    }
    next();
}

const checkCart = (req, res, next) => {
    if(!req.session.cart){
        req.session.cart = []
    }
    next();
}

module.exports = {
    checkUser, 
    checkCart
}