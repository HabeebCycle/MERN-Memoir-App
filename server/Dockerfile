FROM node:12.18.1-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app

EXPOSE 5000
USER node
CMD [ "node", "index.js" ]