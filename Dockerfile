FROM node:17-slim

RUN apt-get update \
  && apt-get install -y build-essential graphicsmagick imagemagick

WORKDIR /gerador_memes/

COPY package.json package-lock.json /gerador_memes/

RUN npm ci --silent

COPY . .

USER node

CMD ["npm", "run", "live-reload"]