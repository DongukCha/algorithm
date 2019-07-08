// 하노이 탑 이동 순서
var input = parseInt(require('fs').readFileSync('./input.txt').toString());
var arr = [];

/*
ex) input = 3
7
1 3(1) ==> 2/3      1
1 2(2) ==>  3   2   1
3 2(1) ==>  3   1/2
1 3(3) ==>      1/2  3
2 1(1) ==>  1    2   3
2 3(2) ==>  1       2/3
1 3(1) ==>         1/2/3
 */

var count = 0;
function hanoiGame(input, a, b, c){
    if(input === 1){
        count++;
        arr.push(a + ' ' + c);
    } else {
        hanoiGame(input - 1, a, c, b);
        count++;
        arr.push(a + ' ' + c);
        hanoiGame(input - 1, b, a, c);
    }
}
// a: 시작봉, b: 중심봉, c: 종착봉
hanoiGame(input, 1, 2, 3);
console.log(count);
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
