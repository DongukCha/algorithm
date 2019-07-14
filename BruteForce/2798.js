var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var rangeStart = parseInt(input[0].split(' ')[0]);
var rangeEnd = parseInt(input[0].split(' ')[1]);
var inputArr = [];

for(var i = 0; i < input[1].split(' ').length; i++){
    inputArr.push(parseInt(input[1].split(' ')[i]))
}

var sumArr  = [];

for(var i = 0; i < inputArr.length; i++){
    for(var j = i + 1; j < inputArr.length; j++){
        for(var k = j + 1; k < inputArr.length; k++){
            var value = inputArr[i] + inputArr[j] + inputArr[k];
            if(rangeStart < value && rangeEnd >= value){
                sumArr.push(value);
            }
        }
    }
}

var possibleMaxValue = sumArr[0];
for(var i = 1; i < sumArr.length; i++){
    if(possibleMaxValue < sumArr[i]){
        possibleMaxValue = sumArr[i];
    }
}
console.log(possibleMaxValue);