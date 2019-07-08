var input = require('fs').readFileSync('./input.txt').toString();

// var upperLetter = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
// var lowerLetter = 'abcdefghigklmnopqrstuvwxyz';
// var number = "0123456789";
//
// var count = 0;
//
// if(typeof input === 'string' && upperLetter.includes(input)){
//     count = 65;
//     for(var i = 0; i < upperLetter.length; i++){
//         if(input !== upperLetter[i]){
//             count++;
//         } else {
//             console.log(count);
//         }
//     }
// } else if(typeof input === 'string' && lowerLetter.includes(input)){
//     count = 97;
//     for(var i = 0; i < lowerLetter.length; i++){
//         if(input !== lowerLetter[i]){
//             count++;
//         } else {
//            console.log(count);
//         }
//     }
// } else if(number.includes(parseInt(input))) {
//     count = 48;
//     for(var i = 0; i < number.length; i++){
//         if(input !== number[i]){
//             count++;
//         } else {
//             console.log(count);
//         }
//     }
// }

console.log(parseInt(input.charCodeAt()));
