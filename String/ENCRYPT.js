//문자열 암호화
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var testCase = parseInt(input[0]);
var evenArr = [];
var oddArr = [];

for(var i = 1; i < input.length; i++){
    for(var j = 0; j < input[i].length; j++){
        if(j % 2 === 0){
            evenArr.push(input[i][j])
        } else {
            oddArr.push(input[i][j])
        }
    }
    console.log(evenArr.concat(oddArr).join(''));
    evenArr = [];
    oddArr = [];
}

