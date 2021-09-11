// Math.floor() 소수점 버림
// Math.ceil() 소수점 올림
// Math.round() 소수점 반올림

//// 와 생각해보니 나머지 나누기가 중요한게 아니라
//// 2진수는 0또는 1이잖아...
//// 그러니까 나머지가 0이면 0 , 아니면 1을 문자열에 더해주면 되는거였어..

let result = '';
let x = 11;

while (1) {
  if (x % 2 == 0) {
    result += '0';
  } else {
    result += '1';
  }
  x = Math.floor(x / 2);
  if (x == 0 || x == 1) {
    result += String(x);
    break;
  }
}
console.log(result);
console.log(result.split('').reverse().join(' '));
console.log('이게바로 2진수 출력 반복문');
