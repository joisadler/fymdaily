"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _user = _interopRequireDefault(require("../../../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LocalStrategy = _passportLocal["default"].Strategy; // Generates hash using bCrypt

var createHash = function createHash(password) {
  return _bcryptNodejs["default"].hashSync(password, _bcryptNodejs["default"].genSaltSync(10), null);
};

var _default = function _default(passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
    // allows us to pass back the entire request to the callback
    usernameField: 'email'
  }, function (req, email, password, done) {
    var findOrCreateUser = function findOrCreateUser() {
      // find a user in Mongo with provided email
      _user["default"].findOne({
        email: email
      }, function (err, user) {
        // In case of any error, return using the done method
        if (err) {
          console.log("Error in SignUp: ".concat(err));
          return done(err);
        } // already exists


        if (user) {
          return done(null, false, {
            message: 'User with this Email already exists'
          });
        } // find a user in Mongo with provided username


        _user["default"].findOne({
          username: req.body.username
        }, function (er, usr) {
          if (er) {
            console.log("Error in SignUp: ".concat(er));
            return done(er);
          } // already exists


          if (usr) {
            return done(null, false, {
              message: 'This username is already in use'
            });
          }

          var confirmPassword = req.body.confirmPassword;

          if (confirmPassword !== password) {
            return done(null, false, {
              message: 'Your password and confirmation password do not match'
            });
          } // if there is no user with that email and username
          // create the user


          var newUser = new _user["default"](); // set the user's local credentials

          newUser.username = req.body.username;
          newUser.password = createHash(password);
          newUser.email = email; // save the user

          newUser.save(function (error) {
            if (error) {
              console.log("Error in Saving user: ".concat(error));
              throw error;
            }

            console.log('User Registration succesful');
          });
          return done(null, newUser);
        });

        return null;
      });
    }; // Delay the execution of findOrCreateUser and execute the method
    // in the next tick of the event loop


    process.nextTick(findOrCreateUser);
  }));
};

exports["default"] = _default;