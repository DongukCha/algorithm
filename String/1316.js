var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split('\n');

var count = 0;
var temp = '';
var check = 0;
var b = 0;

for(var i = 1; i < input.length; i++){
    var string = input[i];

    for(var j = 0; j < string.length -1; j++){
        temp = string.charAt(j);
        check = 0;
        for(var k = j + 1; k < string.length; k++){
            if(string.charAt(k) !== temp){
                check = 1;
            }
            if(string.charAt(k) === temp && check === 1){
                count--;
                b = 1;
                break;
            }
        }
        if(b === 1){
            b=0;
            break;
        }
    }
    count++;
}

console.log(count);