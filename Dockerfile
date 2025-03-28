FROM node:18-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules /app/node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
# Next.js specific files
COPY --from=builder /app/.next /app/.next
# Note: Removed public directory and next.config.js references since they don't exist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Set environment to production (fixed syntax)
ENV NODE_ENV=production

# Start the Next.js application
CMD ["npm", "start"]