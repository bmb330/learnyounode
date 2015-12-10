var strftime = require('strftime');
var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket) {
  socket.end(strftime("%Y-%m-%d %H:%M"));
});

server.listen(port);
