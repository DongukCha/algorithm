var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var t = parseInt(input[0]);

var padovanArr = [1,1,1,2,2];

for(var testCase = 1; testCase <= t; testCase++){
    var n = parseInt(input[testCase]);

    for(var i = 5; i < n; i++){
        padovanArr[i] = padovanArr[i-1] + padovanArr[i - 5];
    }
    console.log(padovanArr[n-1]);
}


