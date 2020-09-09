import express from 'express';
const router = express.Router();

router.route('/health').get((req, res, next) => {
  res.json({status: 'UP'});

  next();
});

export {router as health};
