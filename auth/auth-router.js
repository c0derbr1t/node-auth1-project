const bcrypt = require('bcryptjs');
const express = require('express');

const Users = require('../users/users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'There is nothing to GET here...move along!' });
});

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            req.session.loggedIn = true;
            req.session.username = user.username;
            res.status(201).json({ message: `Welcome ${saved.username}! You now have access to the /users route!`, user: saved });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Registration Failed.', err });
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)){
                req.session.loggedIn = true;
                req.session.username = user.username;
                res.status(200).json({ message: `Welcome ${user.username}! You now have access to the /users route!`, user})
            } else {
                res.status(401).json({ message: 'Invalid Credentials...You shall not pass!!' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Login Failed.', err })
        });
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({ message: 'Oh no! There was an error logging out!', err });
            } else {
                res.status(200).json({ message: 'Log Out Successful!' });
            }
        });
    } else {
        res.status(200).json({ message: "You weren't logged in in the first place. Your status is still 'Logged Out'." });
    }
});

module.exports = router;