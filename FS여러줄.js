let FS = require('fs');

let input = FS.readFileSync('/dev/stdin').toString().split(' ');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

console.log('정답을 이곳에');
