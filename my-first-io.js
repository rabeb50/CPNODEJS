const fs = require('fs');
var test = process.argv[2];
file = fs.readFileSync(test);

contents = file.toString();

console.log(contents.split('\n').length - 1);