var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input[0]);

for(var i = 1; i <= n; i++){
    var str = input[i];
    var score = 0;
    var combo = 0;

    for(var j = 0, l = str.length; j < l; j++){
        if(str[j] === 'O'){
            combo++;
            score += combo;
        } else {
            combo = 0;
        }
    }
    console.log(score);
}



