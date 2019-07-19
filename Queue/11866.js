var input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
var n = parseInt(input[0]);
var k = parseInt(input[1]);
var arr = [];

for(var i = 1; i <= n; i++){
    arr.push(i);
}

var answer = '';
var index = 0;

while(arr.length > 0){
    index = index + k - 1;
    index = index % arr.length;
    if(answer){
        answer = answer + ', ';
    }
    answer = answer + arr[index];
    arr.splice(index, 1);
}

console.log('<' + answer + '>');

