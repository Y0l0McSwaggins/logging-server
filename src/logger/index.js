import {createLogger, format, transports} from 'winston';
const {combine, timestamp, printf} = format;

const myFormat = printf(({level, message, timestamp}) => {
  // eslint-disable-next-line max-len
  return `${level.toUpperCase().padStart(5, ' ')} ${timestamp}: ${message}`;
});

const logger = createLogger({
  format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      myFormat
  ),
  transports: [new transports.Console()],
});
export default logger;
