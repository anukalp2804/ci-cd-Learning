# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY src ./src

# --- Production stage ---
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
ENV PORT=3000
EXPOSE 3000
CMD ["node", "src/index.js"]
