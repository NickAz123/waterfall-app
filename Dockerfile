FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY dist/ ./dist/
COPY src/renderer/ ./src/renderer/

CMD ["node", "dist/main/index.js"]