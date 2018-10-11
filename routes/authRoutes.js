const passport = require('../services/passport');

module.exports = (app) => {
    // Test API
    app.get("/", (req, res) => {
        res.send({hi: 'world'});
    });

    // Auth API
    app.get(
        "/auth/google", 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // Callback API
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );
    
}