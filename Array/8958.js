var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var N = parseInt(input[0]);
var arr = [];


for(var i = 1; i < input.length; i++){
    arr.push(input[i]);
}

for(var i = 0; i < arr.length; i++){
    var score = 0;
    var count = 0;
    
    for(var j = 0; j < arr[i].length; j++){
       if(arr[i][j] === 'O'){
           score++;
           count += score ;
       } else {
           score = 0;
       }
    }
    console.log(count);
    count = 0;
}



