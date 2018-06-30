var rsaPemToJwk = require('rsa-pem-to-jwk');
var uuidv4 = require('uuid/v4');
var pemFile = require('./pemfile').loadPemFileFromPathArg();

// create a random UUID
var uuid = uuidv4().replace(/-/g, '');
var jwk = rsaPemToJwk(pemFile, {"kid": uuid, "alg": "RS256"} , 'public');

console.log(JSON.stringify(jwk, null, 4));