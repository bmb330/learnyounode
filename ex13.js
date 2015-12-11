var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var u = url.parse(req.url, true);
  var d = new Date(u.query.iso);
  var obj = {};

  if (u.pathname === '/api/parsetime') {
    obj.hour = d.getHours();
    obj.minute = d.getMinutes();
    obj.second = d.getSeconds();
  }
  else if (u.pathname === '/api/unixtime') {
    obj.unixtime = d.getTime();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
});

server.listen(port);
