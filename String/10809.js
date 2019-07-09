// var fs = require('fs');
// var input = fs.readFileSync('./input.txt').toString().trim().split('');

// var objAlphbet = {
//     'a': -1, 'b': -1, 'c': -1, 'd': -1, 'e': -1, 'f': -1, 'g': -1, 'h': -1, 'i': -1, 'j': -1,
//     'k': -1, 'l': -1, 'm': -1, 'n': -1, 'o': -1, 'p': -1, 'q': -1, 'r': -1, 's': -1, 't': -1,
//     'u': -1, 'v': -1, 'w': -1, 'x': -1, 'y': -1, 'z': -1
// };
//
//
// for(var i = 0; i < input.length; i++){
//     if(objAlphbet[input[i]] === -1){
//         objAlphbet[input[i]] = i;
//     }
// }
//
// var result = '';
//
// for(var key in objAlphbet){
//     result += objAlphbet[key] + ' ';
// }
//
// console.log(result);

var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString();
var output = '';
for (var c = 97; c <= 122; c++) {
    output += input.indexOf(String.fromCharCode(c)) + ' ';
}
console.log(output);