const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get the list of users.', error: err })
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.findById(id)
        .first()
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(500).json({ message: `No user with an ID of ${id} found!` })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Could not retreive the specified user.', error: err });
        });
});

module.exports = router;