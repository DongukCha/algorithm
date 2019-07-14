var input = require('fs').readFileSync('./input.txt').toString().split('\n');
var arr = [];

for(var i = 1; i < input.length; i++){
    arr.push(parseInt(input[i]));
}


for(var i = 0; i < arr.length; i++){
   for(var j = i + 1; j < arr.length; j++){
       if(arr[i] > arr[j]){
           var temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
   }
}

var result = arr.filter((ele, i) => arr.indexOf(ele) === i);
for(var i = 0; i < result.length; i++){
    console.log(result[i]);
}

