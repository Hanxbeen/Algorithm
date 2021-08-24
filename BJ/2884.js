const FS = require('fs');

const input = FS.readFileSync('/dev/stdin').toString().split(' ');

let hour = input[0];
let minute = input[1];
// let hour = 23;
// let minute = 40;
//45분 일찍 알람 설정하기

// 분에다가 -45 했을때 분이 0보다 작아지면 hour를 -1 해야함
// 0보다 크다면 그냥 hour는 그대로
// 11 50
// 11 05
if (minute - 45 >= 0) console.log(`${hour} ${minute - 45}`);
else if (minute - 45 < 0) {
  if (hour == 0 || hour == 24) hour = 23;
  else hour -= 1;
  minute = 60 - (45 - minute);
  console.log(`${hour} ${minute}`);
}
