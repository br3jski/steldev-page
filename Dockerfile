# Stage 1: Install dependencies
FROM node:lts-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production=false

# Stage 2: Build the Next.js application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules /app/node_modules
COPY . .
COPY public public
RUN npm run build

# Stage 3: Run the Next.js server
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
RUN npm install --production=true
EXPOSE 3000
CMD ["npm", "run", "start"]