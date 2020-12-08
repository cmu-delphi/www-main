# docker image building and packging the website
FROM node:lts-buster
WORKDIR /src
COPY . ./
RUN npm ci --unsafe-perm
RUN npm run build

FROM nginx:stable-alpine
COPY --from=0 /src/public /usr/share/nginx/html