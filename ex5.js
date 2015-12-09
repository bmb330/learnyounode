var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if (!err) {
    list.filter(function(file) {
      if (process.argv[3]) {
        return path.extname(file) === '.'+process.argv[3];
      }
      else {
        return true;
      }
    })
    .forEach(function(file) {
      console.log(file);
    });
  }
});
