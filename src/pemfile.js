var process = require('process');
var path = require('path');
var fs = require('fs');

exports.loadPemFileFromPathArg = function() {
    if (process.argv.indexOf('--path') == -1) {
        console.log("should specify public.pem file path");
        process.exit(1);
    }
    
    // check the public pem file
    var pemFile;
    var pathArg = process.argv[process.argv.indexOf('--path') + 1];
    if (path.isAbsolute(pathArg)) {
        pemFile = fs.readFileSync(pathArg);
    } else {
        var realPath = path.join(process.cwd(), pathArg);
        pemFile = fs.readFileSync(realPath);
    }

    return pemFile
}

