FROM node:12.18.3-alpine3.9

RUN mkdir -p /app

WORKDIR /app

# Need to copy from the git repo
COPY package.json .
COPY src ./src
COPY healthcheck.js .

#Installing the node modules for the app
RUN yarn install --production

HEALTHCHECK --interval=30s CMD node healthcheck.js

CMD ["yarn", "start"]