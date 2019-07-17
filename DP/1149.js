var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input.shift());

var cost = [];
for(var i = 0; i < n; i++){
    cost[i] = input[i].split(' ');
}

var dp = [[]];
dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];

for(var i = 1; i < n; i++){
    dp.push([]);
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + parseInt(cost[i][0]);
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + parseInt(cost[i][1]);
    dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][0]) + parseInt(cost[i][2]);
}

var result = Math.min(Math.min(dp[n-1][0], dp[n-1][1]), dp[n-1][2]);
console.log(result);

