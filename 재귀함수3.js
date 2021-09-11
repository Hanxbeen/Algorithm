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

// Math.floor() 소수점 버림
// Math.ceil() 소수점 올림
// Math.round() 소수점 반올림

//// 와 생각해보니 나머지 나누기가 중요한게 아니라
//// 2진수는 0또는 1이잖아...
//// 그러니까 나머지가 0이면 0 , 아니면 1을 문자열에 더해주면 되는거였어..
