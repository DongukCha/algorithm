var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var n = parseInt(input[0]);
var arr = [];
var dequeue = [];

for(var l = 1; l < input.length; l++){
    arr[l - 1] = input[l].split(' ');
}

for(var i = 0; i < arr.length; i++){
    if(arr[i][0] === 'push_front'){
        dequeue.unshift(parseInt(arr[i][1]));
    } else if(arr[i][0] === 'push_back'){
        dequeue.push(parseInt(arr[i][1]));
    } else if(arr[i][0] === 'pop_front'){
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue.shift());
     } else if(arr[i][0] === 'pop_back'){
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue.pop());
    } else if(arr[i][0] === 'size'){
        console.log(dequeue.length)
    } else if(arr[i][0] === 'empty'){
        dequeue.length === 0 ? console.log(1) : console.log(0);
    } else if(arr[i][0] === 'front'){
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue[0])
    } else if(arr[i][0] === 'back'){
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue[dequeue.length - 1])
    }
}