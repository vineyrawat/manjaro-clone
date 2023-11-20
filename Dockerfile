FROM node:latest as build

WORKDIR /app

COPY package.json yarn* ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "serve" ]