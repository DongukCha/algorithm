var arr = [];
var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');


var N = parseInt(input[0].split(' ')[0]);
var X = parseInt(input[0].split(' ')[1]);

for(var i = 0; i < N; i++){
    arr.push(parseInt(input[1].split(' ')[i]));
}


for(var i = 0; i < arr.length; i++){
    if(arr[i] < X){
        console.log(arr[i])
    }
}