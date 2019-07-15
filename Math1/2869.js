var input = require('fs').readFileSync('./input.txt').toString().split('\n');

function cal(arr) {
    var h = arr[0]; // 층
    var w = arr[1]; // 층당 방 갯수
    var n = arr[2]; // 몇 번째 손님
    var roomNum = 0;

    var a = (n % h) || h;
    var b = (n - a) / h + 1;

    roomNum = a*100 + b;
    return roomNum
}

for(var i = 1; i < input.length; i++) {
    var arr = [];
    var temp = input[i].split(' ');
    for(var j = 0; j < temp.length; j++){
        arr.push(parseInt(temp[j]))
    }
    var roomNumber = 0;
    roomNumber = cal(arr);
    console.log(roomNumber);
}
