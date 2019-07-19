var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var t = parseInt(input.shift());
var left = '(';
var right = ')';

for(var i = 0; i < input.length; i++){
    var stack = [];
    for(var j = 0; j < input[i].length; j++){
        if(left === input[i][j]){
            stack.push(input[i][j])
        } else if(input[i][j] === right){
            if(stack.length === 0){
                stack.push(")");
                break;
            } else {
                stack.pop()
            }
        }
    }
    if(stack.length === 0){
        console.log('YES');
    } else {
        console.log('NO');
    }
}
