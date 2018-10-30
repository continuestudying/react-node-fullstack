    // middlewares/requireCredits.js

    module.exports = (req, res, next) => {
        console.log('Require Credits Middleware : ', req.user);
        if (req.user.credits < 1) {
            return res.status(403).send('Dont enough credits');
        }
        next();
    }