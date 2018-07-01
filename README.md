# jwtjs
The JWT helpers for NodeJS. This repo shows how to create JWKS file and server with Docker in detail.

## Create private & public key
Create private key:
```console
$ ssh-keygen -t rsa -b 2048 -m PEM -f private.pem
```

Generate public key:
```console
$ ssh-keygen -f private.pem -e -m PEM > public.pem
```

## Create JWKS
Create JWK from public.pem
```console
$ node src/createjwks.js --path ./public.pem
{
    "kty": "RSA",
    "kid": "cee00230af4b4f3d86b24cf56592d211",
    "alg": "RS256",
    "n": "AMveSeHOKgI0G...",
    "e": "AQAB"
}
```
Create `jwks.json` and put the above in:
```json
{
    "keys": [
        {
            "kty": "RSA",
            "kid": "cee00230af4b4f3d86b24cf56592d211",
            "alg": "RS256",
            "n": "AMveSeHOKgI0G...",
            "e": "AQAB"
        }
    ]
}
```

## Create JWKS server
Build your own docker image with the demo `Dockerfile`:
```console
$ docker build -t jwksserver .
```
Start and run the jwksserver:
```console
$ docker run -dit --name jwksserver -p 8080:8080 jwksserver
```
Check whether it works:
```console
$ curl http://localhost:8080/.well-known/jwks.json
{
    "keys": [
        {
            "kty": "RSA",
            "kid": "cee00230af4b4f3d86b24cf56592d211",
            "alg": "RS256",
            "n": "AMveSeHOKgI0G...",
            "e": "AQAB"
        }
    ]
}
```

## Sign a JWT with private key
Sign JWT with private.pem
```console
$ node src/sign.js --path ./private.pem
```

