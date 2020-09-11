"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var router = _express["default"].Router();

var _default = function _default(passport) {
  // router.get('/', (req, res) => {
  //   res.render('signup', { message: req.flash('message') });
  // });
  router.post('/', function (req, res, next) {
    // eslint-disable-next-line consistent-return
    passport.authenticate('signup', function (err, user, info) {
      if (err) return next(err);
      if (info) return res.send(info); // if (!user) {
      //   return res.render('signup', {
      //     username: req.body.username,
      //     email: req.body.email,
      //     password: req.body.password,
      //     confirmPassword: req.body.confirmPassword,
      //     message: req.flash('message'),
      //   });
      // }

      req.logIn(user, function (error) {
        if (error) return next(error);
        var _process$env = process.env,
            GMAIL_USER = _process$env.GMAIL_USER,
            GMAIL_PASS = _process$env.GMAIL_PASS,
            GMAIL_HOST = _process$env.GMAIL_HOST,
            GMAIL_PORT = _process$env.GMAIL_PORT;
        var username = user.username,
            email = user.email;

        var smtpTrans = _nodemailer["default"].createTransport({
          host: GMAIL_HOST,
          port: GMAIL_PORT,
          secure: true,
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
          }
        });

        var mailOpts = {
          from: 'FYMdaily',
          to: email,
          subject: 'Welcome to our app!',
          html: "\n          <h1>Welcome to our app!</h1>\n          <h2>Hello, ".concat(username, "!</h2>\n          <p>Your registration to our app successfully completed!</p>\n          <p>Best wishes!</p>\n          <p>FYMdaily team.</p>\n          ")
        };
        smtpTrans.sendMail(mailOpts, function (er, r) {
          if (er) {
            r.send(er);
          }
        }); // return res.redirect('/user-info');
        // return res.send(user);

        return res.send({
          user: user,
          message: 'User Created Successfully!'
        });
      });
    })(req, res, next);
  });
  return router;
};

exports["default"] = _default;