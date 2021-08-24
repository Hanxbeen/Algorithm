//빠른 A+B
let FS = require('fs');

let input = FS.readFileSync('/dev/stdin').toString().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let max = Number(input[0]);
let ans = '';
for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  ans += Number(Number(num[0]) + Number(num[1])) + '\n';
}
console.log(ans);
