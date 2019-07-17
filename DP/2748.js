var input = require('fs').readFileSync('./input.txt').toString();
var n = parseInt(input);
// var makeFib = [0,1];
// //
// // for(var i = 2; i <= n; i++){
// //     var nextNum = makeFib[i - 2] + makeFib[i - 1];
// //     makeFib.push(nextNum);
// // }
// //
// // console.log(makeFib[n]);

function fibonacci(n){
    if(n === 0){
        return 0;
    } else if(n === 1){
        return 1;
    } else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(n));