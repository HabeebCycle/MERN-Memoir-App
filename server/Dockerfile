FROM node:12.18.1-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM node:12.18.1-alpine

WORKDIR /app
COPY --from=build /app/dist /app
COPY package.json /app/package.json
RUN npm install --only=prod

EXPOSE 5000
USER node
CMD [ "node", "index.js" ]