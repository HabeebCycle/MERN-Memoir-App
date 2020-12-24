FROM node:12.18.1-alpine as build

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm install -g nodemon

EXPOSE 5000
USER node
CMD [ "nodemon", "/usr/src/app/index.js" ]