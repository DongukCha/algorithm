var input = require('fs').readFileSync('./input.txt').toString().split(' ');
var n = parseInt(input);
var dp = [];
dp[0] = 0;
dp[1] = 0;

for(var i = 2; i <= n; i++){
    dp[i] = dp[i - 1] +1;
    if(i % 2 === 0){
        dp[i] = Math.min(dp[i], dp[i/2] + 1);
    }
    if(i % 3 === 0){
        dp[i] = Math.min(dp[i], dp[i/3] + 1);
    }
}

console.log(dp[n]);

// function dp(n){
//     if(n === 1){
//         return 0;
//     }
//     if(arr[n] > 0) {
//         return arr[n];
//     }
//     arr[n] = dp(n-1) + 1;
//     if(n%2 === 0){
//         var temp = dp(n/2) + 1;
//         if(arr[n] > temp){
//             arr[n] = temp;
//         }
//     }
//     if(n%3 === 0){
//         var tmp = dp(n/3) + 1;
//         if(arr[n] > tmp){
//             arr[n] = tmp;
//         }
//     }
//     return arr[n];
// }