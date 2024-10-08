# FROM node:20

# for reducing the size of image
FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]