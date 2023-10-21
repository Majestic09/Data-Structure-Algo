// / Equal to 42 or not!
// Description
// You are given an array of N integers. You need to print Yes if 42 is present in array,
//  else print No.

// Input
// Input Format :
// First line contains number of integers N present in the array.
// Second line contains  N  space separated integers.

// Constraints :
// 1 <= N <= 100

// Output
// Output "Yes" or "No" based on condition mentioned above.

// Sample Input 1
// 5
// 3 7 0 9 8

// Sample Output 1
// No

// Hint
// We print No as 42 is not present in array.

let arr = [1, 3, 67, 42, 9, 35];
function check42(arr) {
    let flag = false;
  for (let ele of arr) {
    if (ele === 42) {
      flag = true;
    }
    }
    flag===true?console.log("Yes"):console.log("No")
}
check42(arr)

