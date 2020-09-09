import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import MetricsClient from './monitoring/metrics-client';
import cors from 'cors';

import {monitoring} from './monitoring/index';
import {routes} from './routes/index';
import ignoreFavicon from './middleware/catchFavicon';

const app = express();
app.use(ignoreFavicon);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :response-time'
    )
);

app.use('/logging', [routes, monitoring]);

app.listen(80, () => {
  console.log(`listening on port: 80`);
  const metricsClient = new MetricsClient();
  metricsClient.start();
});
