let FS = require('fs');
let input = FS.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
