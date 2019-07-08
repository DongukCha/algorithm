var obj = {};
require('fs').readFileSync('./input.txt').toString().trim().split('\n').forEach(function(num) {
    obj[parseInt(num) % 42] = true;
});
console.log(Object.keys(obj).length);
