import client from 'prom-client';

export default class MetricsClient {
  constructor() {
  }

  start() {
    client.collectDefaultMetrics();
  }

  getMetrics() {
    return client.register.metrics();
  }
}
