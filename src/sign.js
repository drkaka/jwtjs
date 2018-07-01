var jwt = require('jsonwebtoken');
var cert = require('./pemfile').loadPemFileFromPathArg();

var token = jwt.sign({user_id: 1}, cert, { 
    algorithm: 'RS256',
    expiresIn: 600, // 10 mins
    keyid: "bafa4df017094783a2418477e6a963f7"
});

console.log(token);