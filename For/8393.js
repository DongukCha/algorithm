var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var n = parseInt(input[0]);
var result = 0;

for(var i = 1; i <= n; i++){
    result += i;
}

console.log(result);