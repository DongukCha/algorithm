var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var arr = [];
var result = [];
var count;

for(var i = 0; i < input.length; i++){
    arr.push(parseInt(input[i]));
}

for(var i = 0; i < arr.length; i++){
    result.push(arr[i] % 42);
}

count = result.length;

for(var i = 0; i < result.length; i++){
    for(var j = i + 1; j < result.length; j++){
        if(result[i] === result[j]){
            count--;
        }
    }
}

console.log(count);
