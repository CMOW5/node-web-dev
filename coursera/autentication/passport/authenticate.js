var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

/* provide a user authentication function  
    User.authenticate() is provided
*/
exports.local = passport.use(new LocalStrategy(User.authenticate()));
/* serialize and deserialize user session */
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());