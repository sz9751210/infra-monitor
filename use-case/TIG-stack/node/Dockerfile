FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm init -y 

RUN npm install -y

EXPOSE 3001

CMD [ "node", "app.js" ]