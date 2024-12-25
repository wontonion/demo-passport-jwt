import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../types';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'your-secret-key'
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    try {
      // return payload, will be changed to query database later
      return done(null, payload);
    } catch (error) {
      return done(error, false);
    }
  })
); 