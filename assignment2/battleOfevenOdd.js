// Battle of Odd & Even
// Description
// You are given an array arr of N integers.
// You need to print Odd, if the sum of all odd numbers present in the array is greater
// than sum of all the even numbers present in the array, or else printEven.

// Sample Input 1
// 4
// 1 2 3 4

// Sample Output 1
// Even
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
const battleOfEvenOdd = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let ele of arr) {
    if (ele % 2 === 0) {
      evenSum += ele;
    } else {
      oddSum += ele;
    }
    }
    evenSum>oddSum?console.log("Even"):console.log("Odd")
};
battleOfEvenOdd(arr)
