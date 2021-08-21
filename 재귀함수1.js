// 반복문을 이용한 1부터 100까지 합과 곱
let sum = 0;
let multiple = 1;

for (let i = 1; i <= 100; i++) {
  sum += i;
  //   multiple *= i;
}

console.log('1부터 100까지의 합');
console.log('반복문 : ' + sum);
// console.log('1부터 100까지의 곱 : ' + multiple);

// for 반복문을 100번 도는 것보다 공식을 이용하면 반복없이 값을 도출해낼 수 있다.
// 효율 차이가 엄청나게 차이나는 것이다
// 1부터 원하는 정수까지의 합의 공식은 '(n*(n+1))/2' 이다
// 바로 출력하면,
let n = 100;
console.log('공식 : ' + (n * (n + 1)) / 2);
