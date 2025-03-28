# Build Next.js App
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock* ./
RUN npm install --production=false || yarn install --production=false
COPY . .
RUN npm run build

# Prepare static Next.js files for Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]