import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

export default (passport) => {
  router.post('/', (req, res, next) => {
    passport.authenticate('signup', (err, user, info) => {
      if (err) return next(err);
      if (info) return res.send(info);
      req.logIn(user, (error) => {
        if (error) return next(error);
        const {
          GMAIL_USER,
          GMAIL_PASS,
          GMAIL_HOST,
          GMAIL_PORT,
        } = process.env;
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
        return res.send({
          user,
          message: 'User Created Successfully!',
        });
      });
    })(req, res, next);
  });
  return router;
};
