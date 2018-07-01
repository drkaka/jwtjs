FROM golang:1.10-alpine as build

ENV SOURCEPATH $GOPATH/src/github.com/drkaka/jwtjs 

# Prepare source file
RUN mkdir -p $SOURCEPATH
ADD ./main.go $SOURCEPATH
WORKDIR $SOURCEPATH

# Build
RUN mkdir /jwksserver
RUN go build -o /jwksserver/jwksserver main.go

# Pull Geth into a second stage deploy alpine container
FROM alpine:3.7 as runtime
EXPOSE 8080

# Install to PATH
COPY --from=build /jwksserver/jwksserver /usr/local/bin/

ENTRYPOINT ["jwksserver"]