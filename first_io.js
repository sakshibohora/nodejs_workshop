var fs = require('fs');
let buffer=fs.readFileSync(process.argv[2]);
let count=buffer.toString().split('\n');
console.log(count.length-1);