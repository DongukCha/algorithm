var input = parseInt(require('fs').readFileSync('./input.txt').toString());
var arr = [];
var result = 1;

function factorial(num){
   for(var i = 1; i <= num; i++){
       arr.push(i);
   }

   for(var i = 0; i < arr.length; i++){
       result *= arr[i];
   }

   console.log(result);
}

factorial(input);