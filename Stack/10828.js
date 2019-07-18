var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var n = parseInt(input.shift());
var arr = [];
var stack = [];

for(var test = 0; test < n; test++){
    arr[test] = input[test].split(' ');
}


for(var index = 0; index < arr.length; index++){
    if(arr[index][0] === 'push'){
        stack.push(arr[index][1])
    } else if(arr[index][0] === 'pop'){
        stack.length === 0 ? console.log(-1) : console.log(stack.pop());
    } else if(arr[index][0] === 'size'){
        console.log(stack.length);
    } else if(arr[index][0] === 'empty'){
        stack.length === 0 ? console.log(1) : console.log(0);
    } else if(arr[index][0] === 'top'){
        stack.length === 0 ? console.log(-1) : console.log(stack[stack.length - 1])
    }
}


