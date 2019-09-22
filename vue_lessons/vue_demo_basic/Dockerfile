# Create at 2019-09-22
#
# Check image(node): docker run -it --rm --name node-svr node:lts-alpine sh
# node-svr# node -v, npm -v
# Check tmp image(build stage output): docker run -it --rm --name tmp dc69a41 sh
# tmp# ls /app
#
# Build: docker build -t vuejs-cookbook/vuejs-basic-app .
# Run: docker run -d -p 8080:80 --name vuejs-app vuejs-cookbook/vuejs-basic-app
# Access: http://localhost:8080/hello.html

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]