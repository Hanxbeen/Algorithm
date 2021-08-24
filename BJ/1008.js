let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num1 = Number(input[0]); // 입력1
let num2 = Number(input[1]); // 입력2

console.log(num1 / num2);
