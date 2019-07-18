var input = require('fs').readFileSync('./input.txt').toString().split(' ');
var n = parseInt(input);
var arr = [];

function dp(n){
    if(n === 1){
        return 0;
    }
    if(arr[n] > 0) {
        return arr[n];
    }
    arr[n] = dp(n-1) + 1;
    if(n%2 === 0){
        var temp = dp(n/2) + 1;
        if(arr[n] > temp){
            arr[n] = temp;
        }
    }
    if(n%3 === 0){
        var tmp = dp(n/3) + 1;
        if(arr[n] > tmp){
            arr[n] = tmp;
        }
    }
    return arr[n];
}

console.log(dp(n));