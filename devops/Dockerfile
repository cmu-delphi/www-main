# docker image building and packaging the website
FROM node:lts-buster AS builder
WORKDIR /src
COPY . ./
RUN npm ci --unsafe-perm
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /src/public /usr/share/nginx/html
# ensure files are readable at runtime
RUN chmod o+r -R /usr/share/nginx/html/