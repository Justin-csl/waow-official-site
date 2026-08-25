FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS production

ENV NODE_ENV=production
ENV PORT=8080
ENV HOST=0.0.0.0

WORKDIR /app

COPY --from=build --chown=1000:1000 /app/dist/standalone ./

USER 1000:1000

EXPOSE 8080

CMD ["node", "server.js"]
