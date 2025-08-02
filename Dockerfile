# Base image
FROM node:18-alpine AS builder

# Set working dir
WORKDIR /app

# Copy all
COPY . .

# Install dependencies
RUN npm install

# Build Next.js
RUN npm run build

# -------- Production Image --------
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.mjs

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
# Use the production build