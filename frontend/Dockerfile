FROM node:19-buster-slim AS build-env
WORKDIR /app    
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
    
FROM nginx:1.23.2
COPY --from=build-env /app/dist /usr/share/nginx/html
COPY reverse.conf /etc/nginx/nginx.conf