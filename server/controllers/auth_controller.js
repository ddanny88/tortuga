const bcrypt = require('bcryptjs');



const login = (req, res) => {
    const db = req.app.get('db');
    db.get_user(req.body.username)
        .then(response => {
            console.log(response);
            let user = response[0];
            console.log(user);
            if(!user){
                res.status(401).json('USER NOT FOUND.');
            } else {
                let isAuthenticated = bcrypt.compareSync(req.body.password, user.password) 
                console.log(isAuthenticated);
                if(!isAuthenticated){
                    res.status(403).json('INCORRECT PASSWORD.');
                } else {
                    // put the user on session: 
                    req.session.user = {
                        username: user.username
                    }
                    console.log(req.session.user)
                    res.status(200).json(req.session.user);
                }
            }
        })
        .catch(err=>{
            console.log(`***${err}***`)
        });
};

const register = (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const db = req.app.get('db');
    db.get_user(username)
    .then(response => {
        if(response.length === 0) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            db.register_user(firstName, lastName, email, username,  hash)
                .then(response => {
                    let user = response[0];
                    console.log(user);
                    req.session.user = {
                        username: user.username
                    }
                    console.log(req.session.user);
                    res.status(200).json(req.session.user)
                })
        } else {
            res.status(401).json('USER ALREADY EXISTS.')
        }
    })
    .catch(err=> {
        console.log(`***${err}***`)
    })
}


module.exports = {
    login,
    register
}