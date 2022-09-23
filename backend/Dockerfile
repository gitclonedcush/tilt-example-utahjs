FROM node:16 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY tsconfig*.json nest-cli.json ./

COPY ./prisma ./prisma
RUN yarn prisma:generate

COPY ./src ./src
COPY ./.env.tilt ./.env

RUN yarn build

FROM node:16 AS release

WORKDIR /app

COPY package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "yarn", "start:prod" ]
