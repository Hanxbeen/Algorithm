const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log((num1 + 0.0) / (num2 + 0.0));
