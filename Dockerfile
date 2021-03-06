FROM node:lts

WORKDIR /app

COPY package.json .

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start"]
