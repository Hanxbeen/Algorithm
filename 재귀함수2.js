let num = 0;
let ans = 0;
function sum(num) {
  if (num <= 1) {
    return 1;
  }
  return (ans = num + sum(num - 1));
}

sum(100);
console.log('재귀함수 결과 값 : ' + ans);

//////////////////

function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n + f(n - 1);
}

console.log(`재귀함수 : ${f(100)}`);
