const readline = require('readline');

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

RL.on('line', function (line) {
  console.log(line);
  RL.close();
}).on('close', function () {
  process.exit();
});
