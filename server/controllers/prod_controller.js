
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

const addNewProduct = (req, res) => {
    const db = req.app.get('db');
    const { productName, price, category, img_url } = req.body
    db.add_new_product(productName, price, category, img_url)
        .then( () => {
            res.sendStatus(200)
        })
        .catch( err => {
            console.log(`**${err}**`)
        })
}



module.exports = {
    getProducts, 
    addNewProduct
    
}