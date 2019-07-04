var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var n = parseInt(input[0]);

for(var i = 1; i < 10; i++){
    console.log(n + ' * ' + i + ' = ' + n*i );
}