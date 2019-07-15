var input = require('fs').readFileSync('./input.txt').toString().split(' ');

var up = parseInt(input[0]);
var down = parseInt(input[1]);
var distance = parseInt(input[2]);
var dayCount = 0;

dayCount = (distance - up)/ (up - down) + 1;

console.log(dayCount);