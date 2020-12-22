# docker image using the current built website
FROM nginx:stable-alpine

COPY ./public /usr/share/nginx/html
# ensure files are readable at runtime
RUN chmod o+r -R /usr/share/nginx/html/