// Catch that 420!
// Description
// You are given an integer n. Your task is to find if the string 420 is present in it or
//  not.
// If 420 is present in it Print Caught or Print Escaped.

// Input
// Input Format
// You are provided an integer n.

// Constraints
// `1 <= N <= 1000000

// Output
// Output Format
// Output an string based on the conditions mentioned in description.

// Sample Input 1
// 97420

// Sample Output 1
// Caught

let N = "978420";
function isPresent(N) {
  for (let i = 0; i < N.length; i++) {
    let subStr = "";
    for (let j = i; j < N.length; j++) {
      subStr += N[j];
      let res = check420(subStr);
      if (res) {
        return "Caught";
      }
    }
  }
  return "Escaped";
}
console.log(isPresent(N));

function check420(str) {
  if (str === "420") {
    return true;
  }
}
