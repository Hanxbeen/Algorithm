//////////////////
// 2. 재귀함수로 구현
let ans = [];

function RE(num) {
  if (num < 1) return null;
  ans.push(parseInt(num % 2));
  return RE(num / 2);
}
RE(15);
console.log(ans.reverse());

///여기까지가 강의 듣기 전 내가 푼 재귀

function binarySystem(number) {
  if (number == 0 || number == 1) {
    return String(number);
  }
  return binarySystem(Math.floor(number / 2)) + String(number % 2);
}

console.log(binarySystem(11));
