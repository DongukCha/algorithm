var input = require('fs').readFileSync('./input.txt').toString();
var n = parseInt(input);
var makeFib = [0,1];

for(var i = 2; i <= n; i++){
    var nextNum = makeFib[i - 2] + makeFib[i - 1];
    makeFib.push(nextNum);
}

console.log(makeFib[n]);