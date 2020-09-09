import express from 'express';
import logger from '../logger/index';
const app = express();

app.post('/', (req, res) => {
  const {level, message} = req.body;
  switch (level.toLowerCase()) {
    case 'info':
      logger.info(message);
      break;
    case 'error':
      logger.error(message);
      break;
    case 'warn':
      logger.warn(message);
      break;
    default:
      logger.info(message);
  }
  res.sendStatus(202);
});

export {app as routes};
