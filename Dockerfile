# -------- Builder --------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy source
COPY . .

# Install deps
RUN npm install

# Build Next.js
RUN npm run build


# -------- Runner / Production --------
FROM node:18-alpine

WORKDIR /app

# Install PM2 for process management
RUN npm install -g pm2

# Default ENV (prevent NaN crash)
ENV NODE_ENV=production
ENV PORT=3000
ENV NODE_OPTIONS="--max-old-space-size=256"

# Copy build output & deps
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

# Start with PM2 (auto-restart if crash)
CMD ["pm2-runtime", "npm", "--name", "nextjs", "--", "start"]
