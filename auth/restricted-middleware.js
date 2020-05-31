
module.exports = function restricted(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ message: 'You have to be logged in to access this content!' })
    }
};