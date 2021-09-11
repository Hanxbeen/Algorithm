const FS = require('fs');

const input = FS.readFileSync('/dev/stdin').toString().split(' ');
let ans = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
  ans = ans + (i + '\n');
}
console.log(ans);
