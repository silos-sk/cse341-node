const passport = require('passport');
const GoogleStrategy = require('passport-google-oath20');

passport.use(
    new GoogleStrategy({
    // options for the google strat
}), ()=>{
    // passport callback function
})