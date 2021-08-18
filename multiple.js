const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
// num1 : 472
// num2 : 385

const oneNum = num2 % 10;
// 일의자리 5
const tenNum = Math.floor((num2 % 100) / 10);
// 십의자리 8
const hundredNum = Math.floor(num2 / 100);
// 백의자리 3

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);
