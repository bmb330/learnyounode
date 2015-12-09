var fs = require('fs');
var path = require('path');

module.exports = {
  function listDir(dir, ext, cb) {
    fs.readdir(dir, function(files) {
      files.filter({
        return cb ? path.extname === '.'+ext : true;
      })
      .forEach(null, function (file) {
        cb(file);
      });
    });
  };
};
