FROM node:20

WORKDIR /media/asus/DATA/Projects/React Projects/portfolio

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]