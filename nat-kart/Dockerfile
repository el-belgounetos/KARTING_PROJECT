# Multi-stage Dockerfile for Angular Frontend
FROM node:22-alpine AS build
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./
RUN npm install

# Copy source code and build production assets
COPY . .
RUN npm run build -- --configuration production

# Production NGINX runtime
FROM nginx:1.27-alpine
COPY --from=build /app/dist/nat-kart/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
