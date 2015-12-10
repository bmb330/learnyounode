var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var fileLoc = process.argv[3];

var file = fs.createReadStream(fileLoc, { autoClose: true });

var server = http.createServer(function(req, res) {
  file.pipe(res);
});

server.listen(port);
