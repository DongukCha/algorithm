var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

// a = 고정 비용 , b = 가변 비용 , c = 판매 수익
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);


// 방법 1
for(var i = 0; i < 1000; i++){
    if((c * i) > (a + b * i)){
        console.log(i);
        return;
    }
}

var breakEvenPoint = 0;

// 방법 2
if(b>c){
    breakEvenPoint = -1;
} else {
    breakEvenPoint = a / (c-b) + 1;
}

console.log('break even point: ',breakEvenPoint);