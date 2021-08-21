let FS = require('fs');
let input = FS.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
//////////////////////////////////////////////////////////////////////
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input[0]);

console.log('정답을 이곳에 태우세요');
