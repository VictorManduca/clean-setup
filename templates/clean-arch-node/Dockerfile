FROM node:16-alpine

WORKDIR /app

COPY .env.example ./
COPY package*.json ./

RUN cat .env.example > .env
RUN npm install -s

COPY tsconfig.json .
COPY src/ ./src

EXPOSE 8080

CMD ["npm", "start"]

