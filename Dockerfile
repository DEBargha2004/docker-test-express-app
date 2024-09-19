FROM node:18-alpine 

RUN apk update
RUN apk upgrade


WORKDIR /app

COPY package*.json ./
COPY index.mjs ./

RUN npm install

CMD ["npm","start"]