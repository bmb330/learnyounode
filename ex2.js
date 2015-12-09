console.log(
  process.argv.slice(2).reduce(function(sum, next) { return sum + parseInt(next); }, 0)
);
