var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var stack = [];

for(var i = 0; i < input.length; i++){
    for(var j = 0; j < input[i].length; j++){
        if(input[i][j] === '.') break;
        if(input[i][j] === '(' || input[i][j] === '['){
            stack.push(input[i][j]);
        } else if(input[i][j] === ')'){
            if(stack.indexOf('(') !== -1 && stack.length !== 0){
                var index = stack.indexOf('(');
                stack.splice(index, 1);
            }
        } else if (input[i][j] === ']'){
            if(stack.indexOf('[') !== -1 && stack.length !== 0){
                var index2 = stack.indexOf('[');
                stack.splice(index2, 1);
            }
        }
    }
    if(stack.length === 0){
        console.log('yes');
    } else {
        console.log('no');
    }
    stack = [];
}

