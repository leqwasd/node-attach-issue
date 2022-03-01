# BASE for everything
FROM node:16.14.0-slim as base
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install --production
RUN npm install -g nodemon
EXPOSE 80 9229
COPY build /app/build
CMD ["npm", "run", "start:dev"]
