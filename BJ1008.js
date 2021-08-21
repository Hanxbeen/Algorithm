const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on('line', function (line) {
  console.log(`Received : ${input}`);
  count += 1;
  if (count == 3) {
    rl.close();
  }
});

// rl.on('line', function (line) {
//   console.log(line);
//   //입력 값을 처리할 callback 내용 기제
//   rl.close();
//   // callback 종료
// }).on('close', function (close) {
//   process.exit();
//   //출력과 관련된 내용 기재(console.log같은 것을 말함)
// });
