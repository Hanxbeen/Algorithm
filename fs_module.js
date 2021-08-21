//문제에서 제시한 입력값이 한 줄 일 때 아래 소스를 사용합니다

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input[0]);

console.log('정답을 이곳에 태우세요');

///////////////////////////////////////////
// 여러 줄 입력

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num1 = Number(input[0]); // 입력1
let num2 = Number(input[1]); // 입력2

console.log('정답을 이곳에 태우세요');

///////////////////////////////////////////
// 여러 줄 입력 > 배열로 받아오기

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

console.log('정답을 이곳에 태우세요');
