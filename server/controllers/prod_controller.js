
const getProducts = (req, res) => {
    const db = req.app.get('db');
    db.get_products()
    .then(products => {
        res.status(200).json(products);
    })
    .catch(err=> {
        console.log(`**${err}**`)
    })
}

module.exports = {
    getProducts, 
    
}