var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var k = parseInt(input.shift());
var arr = input.map(function(ele){ return parseInt(ele)});
var stack = [];

arr.forEach(function(e){
    if(e === 0){
        stack.pop();
    } else {
        stack.push(e)
    }
});

var sum =0;
for(var j = 0; j < stack.length; j++){
    sum = sum + stack[j];
}

console.log(sum);