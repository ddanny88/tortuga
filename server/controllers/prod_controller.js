
const getProducts = (req, res) => {
    const db = req.app.get('db');
    db.get_products()
    .then(users => {
        console.log(users)
        res.status(200).json(users);
    })
    .catch(err=> {
        console.log(`**${err}**`)
    })
}

module.exports = {
    getProducts
}