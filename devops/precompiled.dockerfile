# docker image using the current built website
FROM nginx:stable-alpine
LABEL org.opencontainers.image.source=https://github.com/cmu-delphi/www-main

COPY ./public /usr/share/nginx/html
# ensure files are readable at runtime
RUN chmod o+r -R /usr/share/nginx/html/