var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString();
var n = Number(input);
var result = 0;

for(var i = 1; i <= n; i++){
    var sum = i;
    var num = i;

    while(num > 0){
        sum = sum + num % 10;
        num = Math.floor(num/10);
    }

    if(sum == n){
        result = i;
        break;
    }
}
console.log(result);