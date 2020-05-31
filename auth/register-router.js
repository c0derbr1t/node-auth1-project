const bcrypt = require('bcryptjs');
const express = require('express');

const Users = require('../users/users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'There is nothing to GET here...move along!' });
});

router.post('/', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash

    Users.add(user)
        .then(saved => {
            req.session.loggedIn = true;
            req.session.username = user.username;
            res.status(201).json(saved);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Registration Failed.', error: err });
        });
});

module.exports = router;