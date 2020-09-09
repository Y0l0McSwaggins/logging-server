# Logging server

The logging server provides a solution for client side rendered applications or applications that don't natively have a logging solution to send a http request to this server for it to log out the error, info or warn message out for it to be picked up by something such as ELK.

## How it works

It works pretty simply send a post request to `/logging` and it will do the rest and it will log out the message.

It expects a body like:

```json
{
  "level": "error",
  "message": "do you wanna build a snowman"
}
```

the resulting output will be a log like the one below and it will return a 202 status.

```bash
ERROR 2020-09-09 15:49:53: do you wanna build a snowman
```
It uses winston for logging and currently only accepts the log levels (not case sensitive)

- info

- error

- debug

Any other log levels get logged out as an info.

## Running locally

This is a [Node.js](https://nodejs.org/en/) web app.

### Before running

- [download and install Node.js](https://nodejs.org/en/download/).
(It has only been tested on Node.js v12.18)

- [download and install Yarn](https://classic.yarnpkg.com/en/docs/install/).

- Install dependencies

Dependency installation is done using the [`yarn install` command](https://classic.yarnpkg.com/en/docs/cli/install/)

```bash
$ yarn install
```

### Running the app

```bash
$ yarn start
```

## Docker Image

There is a provided [docker image](https://hub.docker.com/repository/docker/yolomcswaggins/logging-server) on dockerhub that is built from the latest versions in master.

To build the docker image locally:

```bash
$ docker build . -f Docker/Dockerfile --tag yolomcswaggins/logging-server
```

## Monitoring

The app exposes two endpoints for monitoring

- `/logging/health`

- `/logging/metrics`

The health endpoint returns a status code `200` and a json body if the service is up

```json
{
    "status": "UP"
}
```

The metrics endpoint is a prometheus endpoint that returns prometheus metrics in order to monitor the server