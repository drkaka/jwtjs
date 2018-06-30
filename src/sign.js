var jwt = require('jsonwebtoken');
var cert = require('./pemfile').loadPemFileFromPathArg();

var token = jwt.sign({foo: 'bar'}, cert, { algorithm: 'RS256'});
console.log(token);