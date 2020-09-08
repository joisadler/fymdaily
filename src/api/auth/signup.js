import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

export default (passport) => {
  // router.get('/', (req, res) => {
  //   res.render('signup', { message: req.flash('message') });
  // });

  router.post('/', (req, res, next) => {
    // eslint-disable-next-line consistent-return
    passport.authenticate('signup', (err, user, info) => {
      if (err) return next(err);
      if (info) return res.send(info);

      // if (!user) {
      //   return res.render('signup', {
      //     username: req.body.username,
      //     email: req.body.email,
      //     password: req.body.password,
      //     confirmPassword: req.body.confirmPassword,
      //     message: req.flash('message'),
      //   });
      // }
      req.logIn(user, (error) => {
        if (error) return next(error);
        const { GMAIL_USER, GMAIL_PASS, GMAIL_HOST, GMAIL_PORT } = process.env;
        const { username, email } = user;
        const smtpTrans = nodemailer.createTransport({
          host: GMAIL_HOST,
          port: GMAIL_PORT,
          secure: true,
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS,
          },
        });
        const mailOpts = {
          from: 'FYMdaily',
          to: email,
          subject: 'Welcome to our app!',
          html: `
          <h1>Welcome to our app!</h1>
          <h2>Hello, ${username}!</h2>
          <p>Your registration to our app successfully completed!</p>
          <p>Best wishes!</p>
          <p>FYMdaily team.</p>
          `,
        };
        smtpTrans.sendMail(mailOpts, (er, r) => {
          if (er) {
            r.send(er);
          }
        });
        // return res.redirect('/user-info');
        // return res.send(user);
        return res.send({
          user,
          message: 'User Created Successfully!',
        });
      });
    })(req, res, next);
  });
  return router;
};
