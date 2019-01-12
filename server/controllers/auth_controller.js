

const login = (req, res) => {
    const db = req.app.get('db');

    db.get_user(req.body.username)
    .then(user => {
        console.log(user[0])
        let thisUser = user[0].username;
        console.log(thisUser);
    })
    .catch(err=>{
        console.log('err: ', err)
    })
}

const register = (req, res) => {
    const db = req.app.get('db');
    db.add_user()
}


module.exports = {
    login,
    register
}