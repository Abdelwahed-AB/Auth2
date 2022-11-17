const jwt_strat = require("passport-jwt").Strategy;
const extract_jwt = require("passport-jwt").ExtractJwt;
const opts = {};

opts.jwtFromRequest = extract_jwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Secret';


module.exports = new jwt_strat(opts, (jwt_payload, done)=>{
    if(jwt_payload.email === "test@test.com"){
        return done(null, true);
    }
    return done(null, false);
});