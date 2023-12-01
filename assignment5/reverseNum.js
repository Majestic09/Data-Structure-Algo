function reverseNum(n) {
  let reverse = 0;
  while (n !== 0) {
    let temp = Math.floor(n % 10);
    reverse = reverse * 10 + temp;
    n = Math.floor(n / 10);
  }
  return reverse;
}
let n = 971;
console.log(reverseNum(n));
