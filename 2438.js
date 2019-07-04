var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var n = parseInt(input[0]);

for(var i = 0; i < n; i++){
    for(var j = 0; j < i + 1; j++){
        console.log('*');
    }
    console.log('\n');
}