var mymodule = require('./mymodule.js');


mymodule(process.argv[2], process.argv[3], function(err, files) {
  if (err) {
    return console.error('Error:', err);
  }
  else {
    files.forEach(function(file) {
      console.log(file);
    });
  }
});
