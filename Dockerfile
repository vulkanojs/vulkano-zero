FROM node:18

RUN npm i -g nodemon webpack webpack-cli concurrently
RUN mkdir -p /home/app
WORKDIR /home/app
EXPOSE 3000 8082 9229
