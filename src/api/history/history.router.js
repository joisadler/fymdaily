import express from 'express';

import {
  createHistoryEntry,
  getHistoryEntry,
  getHistoryEntries,
  addEatenFood,
  updateUserInfo,
  updateEatenFood,
  deleteEatenFood,
} from './history.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

router.get('/', isAuthenticated, getHistoryEntries);
router.get('/:id', isAuthenticated, getHistoryEntry);
router.post('/', isAuthenticated, createHistoryEntry);
router.put('/info', isAuthenticated, updateUserInfo);
router.post('/food', isAuthenticated, addEatenFood);
router.put('/food', isAuthenticated, updateEatenFood);
router.delete('/food', isAuthenticated, deleteEatenFood);

module.exports = router;
