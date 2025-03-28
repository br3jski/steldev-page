# Etap 1: Budowanie aplikacji Next.js
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock* ./
RUN npm install --production=false || yarn install --production=false
COPY . .
RUN npm run build

# Etap 2: Uruchomienie serwera Next.js
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
RUN npm install --production || yarn install --production
EXPOSE 3000
CMD ["npm", "start"]