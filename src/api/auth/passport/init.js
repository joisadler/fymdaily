import login from './login';
import signup from './signup';
import User from '../../../models/user';

export default (passport) => {
  passport.serializeUser((user, done) => {
    console.log('serializing user: ');
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      console.log('deserializing user:', user);
      done(err, user);
    });
  });

  login(passport);
  signup(passport);
};
