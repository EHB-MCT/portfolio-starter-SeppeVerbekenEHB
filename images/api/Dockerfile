FROM node:latest

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install --quiet

COPY ./src ./src
COPY knexfile.js ./
COPY ./db ./db

CMD ["npm", "run", "tdd"]