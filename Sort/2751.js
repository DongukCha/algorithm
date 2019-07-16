var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var n = parseInt(input[0]);
var unsortedArr = [];

function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }

    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle,arr.length);

    function merge(left, right){
        var result = [];

        while(left.length &&  right.length){
            if(left[0] < right[0]){
                result.push(left.shift())
            }else{
                result.push(right.shift())
            }
        }

        while(left.length){
            result.push(left.shift())
        }

        while(right.length){
            result.push(right.shift())
        }

        return result;
    }

    return merge(mergeSort(left), mergeSort(right))
}

for(var i = 1; i <= n; i++){
    unsortedArr.push(parseInt(input[i]))
}

var a = mergeSort(unsortedArr);
console.log(a);