const jws_strat = require("passport-jwt").Strategy;
const extract_jwt = require("passport-jwt").ExtractJwt;
const opts = {};

opts.jwtFromRequest = extract_jwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Secret'