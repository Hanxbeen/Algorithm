// 2진수 변환
// 1. 반복문으로 구현

let bnum = 11;
let share = 0;
let ans = [];

while (true) {
  share = parseInt(bnum / 2);
  ans.push(parseInt(bnum % 2));

  bnum = share;
  //   if (bnum == 0 && share == 0) break;
  if (!bnum && !share) break;
}

console.log(ans.reverse());

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
