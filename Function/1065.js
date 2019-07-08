// var fs = require('fs');
// var input = fs.readFileSync('./input.txt').toString().split(' ');
//
// var n = parseInt(input[0]);
// var count = 0;
//
// function hansu(num){
//     if(num < 100){ return true}
//     else if(num > 999) { return false }
//
//     var a = num / 100;
//     var b = (num / 10) % 10;
//     var c = (num / 10);
//
//     if(a - b === b - c){
//         count++
//     }
// }
//
// for(var i = 0; i < n; i++){
//     if(hansu(i+1)){ count++; }
// }
//
// console.log(count);


var fs = require('fs');
var input = parseInt(fs.readFileSync('/dev/stdin').toString());
function check(n) {
    if (n < 100) {
        return true;
    }
    var list = n.toString().split('').map(function(item) {
        return parseInt(item);
    });
    if (list[0]-list[1] === list[1]-list[2]) {
        return true;
    }
    return false;
}
var count = 0;
for (var i = 1; i <= input; i++) {
    if (check(i)) {
        count++;
    }
}
console.log(count);