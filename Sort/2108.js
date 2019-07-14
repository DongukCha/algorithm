var input = require('fs').readFileSync('./input.txt').toString().split('\n');

var arr = [];

for(var i = 1; i < input.length; i++){
    arr.push(parseInt(input[i]));
}


function mean(arr){
    var sum = 0;
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    result = sum / arr.length;
    return Math.floor(result);
}

function median(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //even
    if(arr.length % 2 === 0){
        var index1 = Math.floor(arr.length/2);
        var index2 = index1 - 1;
        result = arr[index1] + arr[index2];
        return result;
    } else{
      // odd
        var index = Math.floor(arr.length/2);
        result = arr[index];
        return result;
    }
}

function mode(arr){
    var obj = {};
    var temp = [];
    var sortedArr = [];
    var value = 0;
    for(var i = 0; i < arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    var check = 0; // 여러개 있는가?
    for(var key in obj){
        check = check + obj[key];
    }
    if(check/Object.values(obj).length === Object.values(obj)[0] ){
        //여러개 있다!
        temp = Object.keys(obj);
        for(var i = 0; i < temp.length; i++){
            sortedArr.push(parseInt(temp[i]))
        }

        for(var i = 0; i < sortedArr.length; i++){
            for(var j = i + 1; j < sortedArr.length; j++){
                if(sortedArr[i] > sortedArr[j]){
                    var temp = sortedArr[i];
                    sortedArr[i] = sortedArr[j];
                    sortedArr[j] = temp;
                }
            }
        }
        return sortedArr[1];
    } else {
        temp = Object.values(obj);
        var maxVal = Math.max.apply(null, temp);


        // for(var i  = 0; i < temp.length; i++){
        //     for(var j = i+1; j < temp.length; j++){
        //         if(temp[i] > temp[j]){
        //             maxVal = temp[i];
        //         }
        //     }
        // }


        for(var key in obj){
            if(obj[key] === maxVal){
                value = key
            }
        }

       return value;
    }

}

function range(arr){
    var max = 0;
    var min = 0;
    var result = 0;

    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    max = arr[arr.length -1];
    min = arr[0];
    result = max - min;
    return result;
}

console.log(mean(arr));
console.log(median(arr));
console.log(mode(arr));
console.log(range(arr));