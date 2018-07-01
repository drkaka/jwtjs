var tk = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJhZmE0ZGYwMTcwOTQ3ODNhMjQxODQ3N2U2YTk2M2Y3In0.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1MzA0NDg1OTgsImV4cCI6MTUzMDQ0OTE5OH0.vTqFcw6_3D0FYV92JXSHeI7fgz-_DX6_cbcvI-3wu88F6anbLu4wwUEcasv-it4khu7ElnK-XBut38T4rFi7P8Hf8DmWgr2_EBDaMn0tRRw4oaAxa6wKnm6SQdRT3uGZaamAV2YmVY6j2JoUdWF8GX0kMxMLSTs8Br-3NHcW6MuspGVI1kRsrl4jlndaUY-g8LWyrND-7eoIsxVh4gMiGf-pXLS0D5EMI12DzUPr2u8f0S3uJYAm2Bpp9RsgCM8rzLJFoyDvGGTnSqmk2hIhoPAtPrk_6oe9NXbFZKhdZ8tJJ7A0jWk45kQQm10faOHKWzbkPJB9SrcaxE8sEFPfjA';

var jwt = require('jsonwebtoken');
// var fs = require('fs');

// var cert = fs.readFileSync('public.pem'); // get public key
// jwt.verify(tk, cert, { algorithms: ['RS256'] }, function (err, payload) {
//     console.log("err:", err);
//     console.log(payload);
// });

var jwksClient = require('jwks-rsa');

var client = jwksClient({
    strictSsl: false,
    jwksUri: 'http://localhost:8080/.well-known/jwks.json'
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
        console.log("err:", err);
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

jwt.verify(tk, getKey, { algorithms: ['RS256'] }, function (err, decoded) {
    console.log("err:", err);
    console.log(decoded) 
});