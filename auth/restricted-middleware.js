const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = function restricted(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({ message: 'Invalid Credentials...You shall not pass!!' });
                }
            })
            .catch(({ name, message, stack }) => {
                res.status(500).json({ name, message, stack });
            })
    } else {
        res.status(400).json({ message: 'You shall not pass!!! Please use valid credentials to access this content.' })
    }
}