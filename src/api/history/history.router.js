import express from 'express';

import {
  createHistoryEntry,
  getHistoryEntry,
  getHistoryEntries,
  addEatenFood,
  updateUserInfo,
  // updateEatenFood,
  // deleteEatenFood,
} from './history.controller';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
};

router.get('/', isAuthenticated, getHistoryEntries);
router.get('/:id', isAuthenticated, getHistoryEntry);
router.post('/', isAuthenticated, createHistoryEntry);
router.put('/food', isAuthenticated, addEatenFood);
router.put('/info', isAuthenticated, updateUserInfo);
// router.put('/', isAuthenticated, updateHistoryEntry);
// router.delete('/:id', isAuthenticated, deleteHistoryEntry);

module.exports = router;
