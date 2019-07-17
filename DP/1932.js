var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input.shift());
var dp = [];

for(var i = 0; i < n; i++){
    dp[i] = input[i].split(' ').map(function(ele){
        return parseInt(ele);
    })
}


for(var i = 1; i < n; i++){
    for(var j = 0; j <= i; j++){
        if(j === 0){
            dp[i][j] = dp[i-1][j] + dp[i][j]
        } else if(j === i){
            dp[i][j] = dp[i-1][j-1] + dp[i][j]
        } else {
            dp[i][j] = Math.max((dp[i-1][j-1] + dp[i][j]), (dp[i-1][j] + dp[i][j]))
        }
    }
}


var maxValue = dp[n-1][0]

for(var i = 0; i < dp[n-1].length; i++){
    for(var j = i+1; j < dp[n-1].length; j++){
        if(maxValue < dp[n-1][j]){
            maxValue = dp[n-1][j];
        }
    }
}

console.log(maxValue);