const bcrypt = require('bcryptjs');

const login = (req, res) => {
    const db = req.app.get('db');

    db.get_user(req.body.username)
    .then(response => {
        let user = response[0];
        // console.log(user);
        if(!user){
            res.status(401).json('USER NOT FOUND.')
        } else {
            // console.log(user.hash)
            let isAuthenticated = bcrypt.compareSync(req.body.password, user.hash)
            // returns a boolean 
            if(!isAuthenticated){
                res.status(403).json('INCORRECT PASSWORD.');
            } else {
                req.session.user = {
                    id: user.id,
                    isAdmin: user.is_admin,
                    username: user.username,
                }
                console.log('The user on session is: ')
                res.status(200).json(req.session.user);
            }
        }
    })
    .catch(err=>{
        console.log('err: ', err)
    });
}

const register = (req, res) => {
    const db = req.app.get('db');
    db.add_user()
}


module.exports = {
    login,
    register
}