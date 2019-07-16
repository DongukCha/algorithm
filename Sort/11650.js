var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input[0]);
var coordinates = [];

for(var i = 1; i <= n; i++){
    var temp = input[i].split(' ');
    var x = parseInt(temp[0]);
    var y = parseInt(temp[1]);
    coordinates.push([x,y])
}

// console.log(coordinates);

coordinates.sort(function(a,b) {
    return a[0] - b[0] || a[1] - b[1];
});

coordinates = coordinates.map(function(e) {
    return e.join(' ')
});

console.log(coordinates.join('\n'));