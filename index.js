const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// Passport Config
passport.use(new GoogleStrategy({
    clientID: '405757341394-q9i1ck6vu0qli1pr78cgdg8kuiehqoqk.apps.googleusercontent.com',
    clientSecret: 'zOV8wJwK7S69mSDg5tmJcDcb',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('Access Token : ', accessToken);
    console.log('Refress Token : ', refreshToken);
    console.log('Profile : ', profile);
    done(() => {
        console.log('DONE ...');
    });
}));

app.get('/', function(req, res) {
    res.send({hello: 'World'});
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));



const PORT = process.env.PORT || 5000;

app.listen(PORT);


// clientID: 405757341394-q9i1ck6vu0qli1pr78cgdg8kuiehqoqk.apps.googleusercontent.com
// clientSecret: zOV8wJwK7S69mSDg5tmJcDcb