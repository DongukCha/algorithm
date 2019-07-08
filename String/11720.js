var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input[0]);
var arr = input[1].split('');
var sum = 0;

for(var i = 0; i < n; i++){
    sum += parseInt(arr[i]);
}

console.log(sum);