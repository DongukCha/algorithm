var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString().split(' ');

var n = parseInt(input[0]);

// step1. n번째 분수는 몇 번째 대각선에 있는가

// step2. 몇 번째 대각선이 홀수 or 짝수 ?

// step3. 짝수일 경우) 분자 + 1, 분모 - 1
//        홀수일 경우) 분자 - 1, 분모 - 1

var nthLine = 0;
var total = 0;
var previous = 0;

function lineCheck(num){
    var i = 1;
    var sum = 0;
    while(sum < num){
        sum = sum + i++;
    }
    total = sum;
    return evenOrOdd(i - 1);
}

function evenOrOdd(num){
    previous = total - num;
    nthLine = num;
    // console.log('nth', nthLine)
  if(num % 2 === 0){
      return 'even'
  } else{
      return 'odd';
  }
}


var line = lineCheck(n);


if(line === 'odd'){
    console.log((nthLine - (n - previous - 1)) + '/' + (n - previous))
} else {
    console.log((n - previous) + '/' + (nthLine - (n - previous - 1)));
}

