const bcrypt = require('bcryptjs');
const express = require('express');

const Users = require('../users/users-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'There is nothing to GET here...move along!' });
});

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.loggedIn = true;
                req.session.username = user.username;
                res.status(200).json({ message: `Welcome ${user.username}! You now have access to the /users route!` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials...You shall not pass!!' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Login Failed.', error: err });
        })
})

module.exports = router;