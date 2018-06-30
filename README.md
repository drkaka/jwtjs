# jwtjs
The JWT methods for NodeJS.

Create private key:
```console
$ ssh-keygen -t rsa -b 2048 -m PEM -f private.pem
```

Generate public key:
```console
$ ssh-keygen -f private.pem -e -m PEM > public.pem
```

Create JWK from public.pem
```console
$ node src/createjwks.js --path ./public.pem
```

Sign JWT with private.pem
```console
node src/sign.js --path ./private.pem
```