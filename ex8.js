var http = require('http');
var url = process.argv[2];
var reqData = [];

http.get(url, function(resp) {
  resp.setEncoding('utf8');
  resp.on('data', function(data) { reqData.push(data); });
  resp.on('error', console.error);
  resp.on('end', function() {
    console.log(reqData.join('').split('').length);
    console.log(reqData.join(''));
  });
});
