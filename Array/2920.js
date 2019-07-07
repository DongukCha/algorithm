var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var arr = [];
var ascending = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
var descending = [ 8, 7, 6, 5, 4, 3, 2, 1 ];
var result;

for(var i = 0; i < input.length; i++){
    arr.push(parseInt(input[i]));
}


if(arr.toString() === ascending.toString()){
    result = 'ascending';
} else if (arr.toString() === descending.toString()){
    result = 'descending';
} else {
    result = 'mixed';
}

console.log(result);

