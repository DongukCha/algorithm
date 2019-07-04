var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var times = parseInt(input[0]);

for(var i = 1; i < times + 1; i++){
    var stringNum = input[i].split(' ');
    var a = parseInt(stringNum[0]);
    var b = parseInt(stringNum[1]);
    console.log('Case #' + i + ': ' + (a+b));
}