var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var n = parseInt(input.shift());
var arr = [];
var queue = [];

for(var test = 0; test < n; test++){
    arr[test] = input[test].split(' ');
}


for(var index = 0; index < arr.length; index++){
    if(arr[index][0] === 'push'){
        queue.push(arr[index][1])
    } else if(arr[index][0] === 'pop'){
        queue.length === 0 ? console.log(-1) : console.log(queue.shift());
    } else if(arr[index][0] === 'size'){
        console.log(queue.length);
    } else if(arr[index][0] === 'empty'){
        queue.length === 0 ? console.log(1) : console.log(0)
    } else if(arr[index][0] === 'front'){
        queue.length === 0 ? console.log(-1) : console.log(queue[0]);
    }  else if(arr[index][0] === 'back'){
        queue.length === 0 ? console.log(-1) : console.log(queue[queue.length - 1]);
    }
}


