import express from 'express';

const router = express.Router();

export default () => {
  router.get('/', (req, res) => {
    req.logout();
    res.send({ message: 'Logged Out Succsessfully' });
  });
  return router;
};
