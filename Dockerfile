FROM node:14-alpine

WORKDIR /usr/app
ENV PATH /usr/node_modules/.bin:$PATH
COPY ./package.json ./
RUN npm cache clean --force
RUN npm rebuild
RUN npm install
RUN npm install --save-dev
COPY . /usr/app
CMD ["npm","run","dev"]
