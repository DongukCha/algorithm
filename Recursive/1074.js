var input = require('fs').readFileSync('./input.txt').toString().split(' ');
var n = parseInt(input[0]); //2
var r = parseInt(input[1]); //3
var c = parseInt(input[2]); //1
var ans = 0;
var y = Math.pow(2,n) / 2;
var x = y;

while(n-- > 0){
    var temp = Math.pow(2, n) / 2;
    var skip = Math.pow(4, n);

    if(r < y && c < x){
        // 1사분면
        x -= temp;
        y -= temp;
    } else if(r < y && x <= c){
        // 2사분면
        x += temp;
        y -= temp;
        ans += skip;
    } else if (y <= r && c < x){
        // 3사분면
        x -= temp;
        y += temp;
        ans += skip * 2;
    } else {
        x += temp;
        y += temp;
        ans += skip *3;
    }
}

console.log(ans);


