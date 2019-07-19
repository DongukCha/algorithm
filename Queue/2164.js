var input = require('fs').readFileSync('./input.txt').toString().trim();
var n = parseInt(input);
var arr = [];

for(var k = 1; k <= n; k++){
    arr.push(k);
}

while(arr.length !== 1){
    arr.shift();
    arr.push(arr.shift())
}

console.log(arr[0]);