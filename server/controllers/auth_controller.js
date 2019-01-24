const bcrypt = require('bcryptjs');


// USER LOGIN: 
const login = (req, res) => {
    const db = req.app.get('db');
    db.get_user(req.body.username)
        .then(response => {
            // console.log(response); //returns an array.
            let user = response[0];
            // console.log(user);
            if(!user){
                res.status(401).json('USER NOT FOUND.');
            } else {
                let isAuthenticated = bcrypt.compareSync(req.body.password, user.password) 
                // console.log(isAuthenticated);
                if(!isAuthenticated){
                    res.status(403).json('INCORRECT PASSWORD.');
                } else {
                    // put the user on session:
                    req.session.user = {
                        username: user.username
                    }
                    // console.log(req.session.user)
                    res.status(200).json(req.session.user);
                }
            }
        })
        .catch( err => {
            console.log(`***${err}***`)
        });
};

// comppare the reggistration info to that of the form, and that of the table. 
// USER REGISTRATION: 
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
                    // console.log(response)
                    let user = response[0];
                    // console.log(user);
                    req.session.user = {
                        username: user.username,
                        firstName: user.firstname,
                        lastName: user.lastname,
                        email: user.email
                    }
                    // console.log(req.session.user);
                    res.status(200).json(req.session.user)
                })
        } else {
            res.status(401).json('USER ALREADY EXISTS.')
        }
    })
    .catch( err => {
        console.log(`***${err}***`)
    })
}

const getUsername = (req, res) => {
    res.status(200).json(req.session.user)
}

const getSeshy = (req, res) => {
    res.status(200).json(req.session);
}

// USER SIGNOUT: 
const signOut = (req, res) => {
    req.session.destroy();
    res.status(200).json('SESSION TERMINATED...')
}


module.exports = {
    login,
    register,
    signOut,
    getUsername,
    getSeshy
}