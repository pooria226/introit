FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9.2.0

RUN npm install

COPY . .

RUN npm i -g prisma

RUN prisma generate --schema=./prisma/schema.prisma

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]