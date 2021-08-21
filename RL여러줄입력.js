const readline = require('readline');

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
RL.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(input);
  process.exit();
});
