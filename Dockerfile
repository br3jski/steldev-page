# Etap 1: Budowanie aplikacji Next.js
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock* ./
RUN npm install --production=false || yarn install --production=false
COPY . .
RUN npm run build

# Etap 2: Uruchomienie serwera Nginx do obsługi statycznych plików
FROM nginx:stable-alpine
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html/public
COPY --from=builder /app/.next/server/pages /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]