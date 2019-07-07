var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var result = [];
var arr = input[1].split(' ');
var n = parseInt(input[0]);
var max = -1000000;
var min = 1000000;

for(var i = 0; i < arr.length; i++){
    result.push(parseInt(arr[i]));
}

for(var i = 0; i < n; i++){
    max = (max < result[i]) ? result[i] : max;
    min = (min > result[i]) ? result[i] : min;
}

console.log(min + ' ' + max);