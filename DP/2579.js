var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var n = parseInt(input.shift());
var dp = [];
var arr = [];

for(var i = 0; i < n; i++){
   arr[i] = parseInt(input[i]);
}

dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for(var index = 3; index < n; index++){
    dp[index] = Math.max(dp[index-2] + arr[index], dp[index-3] + arr[index] + arr[index-1])
}

console.log(dp[n-1]);