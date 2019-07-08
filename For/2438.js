var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var n = parseInt(input[0]);
var str = "";

for(var i = 0; i < n; i++){
    str += "*";
    console.log(str);
}