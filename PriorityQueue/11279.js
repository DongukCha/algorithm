/*
    자료구조 힘
   - 최대 힙을 이용하여 다음 연산을 지원하는 프로그램을 작성하라

   1. 배열에 자연수 x를 넣는다.
   2. 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.

 */

var input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
var n = parseInt(input.shift());
var arr = [];
var store = [];


input.forEach(function(el){
    return arr.push(parseInt(el));
});

function findMax(store){
    var max = store[0];
    for(var m = 0; m < store.length; m++){
        for(var n = m + 1; n < store.length; n++){
            if(max < store[n]){
                max = store[n]
            }
        }
    }
    return max;
}


for(var i = 0; i < n; i++){
    if(store.length === 0 && arr[i] === 0){
        console.log(0)
    } else if(arr[i] === 0){
        var max = findMax(store);
        var index = store.indexOf(max);
        store.splice(index, 1);
        console.log(max);
    }
    store.push(arr[i]);
}
