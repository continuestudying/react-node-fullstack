const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (token, refreshToken, profile, done) => {
    console.log('Token : ', token);
    console.log('Refresh Token : ', refreshToken);
    console.log('Profile : ', profile);
    done(() => {
        console.log('DONE ...');
    });
}));

module.exports = passport;
