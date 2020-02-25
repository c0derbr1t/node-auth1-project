const express = require('express');

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');
const restricted = require('../auth/restricted-middleware.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', restricted, userRouter);

router.get('/', (req, res) => {
    res.send('<h2>Please visit the /login route to sign in, or the /register route to create a new user!</h2>');
});

module.exports = router;