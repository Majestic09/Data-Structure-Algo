// sum of all even numbers present in the array

function sumOfeven(arr) {
  let sum = 0;
  for (let ele of arr) {
    if (ele % 2 === 0) {
      sum += ele;
    }
    }
    console.log(sum)
}
let arr = [1, 2, 3, 4, 5];
sumOfeven(arr);
