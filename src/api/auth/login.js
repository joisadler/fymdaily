import express from 'express';

const router = express.Router();

export default (passport) => {
  router.post('/', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) return next(err);
      if (info) return res.send(info);

      req.logIn(user, (error) => {
        if (error) return next(error);
        return res.send({
          user,
          message: 'Successfully Authenticated!',
        });
      });
    })(req, res, next);
  });
  return router;
};
