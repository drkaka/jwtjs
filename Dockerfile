FROM httpd:alpine
COPY ./jwks.json /usr/local/apache2/htdocs/.well-known/