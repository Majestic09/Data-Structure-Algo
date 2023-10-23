// Count such pairs
// Description
// You are given an array A of N integers along with a target integer K.
// Your task is to find out the number of pairs of integers present in the array,
// whose sum is equal to the target value K.

// Input
// Input Format :
// First line contains 2 integers: N and K.
// Second line contains N space separated integers which are the elements of the array.

// Constraints :
// 1 <= N <= 100

// Output
// Print the count of such pairs whose sum is K.

// Sample Input 1
// 5 9
// 3 0 6 2 7

// Sample Output 1
// 2
// Hint
// Pairs whose sum is 9 are:- {3,6} , {2, 7}. So answer is 2.

let N = 5;
K = 9;
let arr = [3, 0, 6, 2, 7];
function countPairs(N, K) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === K) {
        count++;
      }
    }
    }
    console.log(count)
}
countPairs(N, K);
