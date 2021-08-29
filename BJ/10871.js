// X보다 작은 수
let FS = require('fs');

let input = FS.readFileSync('/dev/stdin').toString().split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let datas = [];
let ans = '';
for (let i = 0; i < input.length; i++) {
  datas.push(input[i]);
}
for (let k = 2; k < datas.length; k++) {
  if (Number(datas[k]) < Number(datas[1])) {
    ans += datas[k] + ' ';
  }
}
console.log(ans);
