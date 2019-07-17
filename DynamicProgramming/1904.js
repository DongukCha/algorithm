var input = parseInt(require('fs').readFileSync('./input.txt').toString());
var n = input;
var dividor = 15746;
var arr = [1,2];

for(var i = 2; i < n; i++){
    arr[i] = (arr[i - 2] + arr[i - 1]) % dividor;
}

console.log(arr[n - 1]);