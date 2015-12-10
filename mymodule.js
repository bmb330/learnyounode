var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    }
    else {
      callback(null, files.filter(function (file) {
        if (callback) {
          return path.extname(file) === '.'+ext;
        }
        else {
          return true;
        }
      }));
    }
  });
};
