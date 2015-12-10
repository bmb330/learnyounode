var http = require('http');
var urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4]
];

var cbCount = 0;
var reqData = [
  [],
  [],
  []
];

urls.forEach(function(url, index) {
  http.get(url, function(resp) {
    var i = index;
    resp.on('data', function(data) {
      reqData[i].push(data);
    });
    resp.on('error', console.error);
    resp.on('end', function() {
      if (++cbCount === 3) {
        reqData.forEach(function(arr) {
          console.log(arr.join(''));
        });
      }
    });
  });
});
