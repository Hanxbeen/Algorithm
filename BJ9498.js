const FS = require('fs');

const input = FS.readFileSync('/dev/stdin').toString().split(' ');

if (input[0] >= 90) console.log('A');
else if (input[0] >= 80) console.log('B');
else if (input[0] >= 70) console.log('C');
else if (input[0] >= 60) console.log('D');
else console.log('F');
