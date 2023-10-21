// Detect Palindrome
// Description

// You are given a integer num.
// You need to print Yes if that integer is a palindrome or else print No.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the
//  same backward as forward, such asmadamorracecar.

// Input
// Input Format
// First line contains num, a integer.

// Constraints
// 1 <= num <= 1000000

// Output
// Print Yes or No depending upon the integer.

// Sample Input 1

// 1221
// Sample Output 1

const str = "1221";
function checkPalindrome(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  newStr === str
    ? console.log(str, "is Palindrome")
    : console.log(newStr, "is not Palindrome");
}
checkPalindrome(str);
