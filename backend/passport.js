const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();



passport.use(new GoogleStrategy({
    clientID: process.env.NODE_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NODE_GOOGLE_SECRET_KEY,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
},
     function (request,accessToken, refreshToken, profile, cb,done) {
        
            return (done(null, profile) );
        
    }
));


passport.serializeUser((user, done) => {
    done(null, user)
    
})

passport.deserializeUser((user, done) => {
    done(null, user)
})