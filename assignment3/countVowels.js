// Count Consonant
// Description
// You are give a strings.
// Your task is to write a program that counts the number of consonants
//  (non-vowels characters) present in the string.

// Input
// Input Format:
// First-line contains a string S

// Constraints:
// 1 <= length of (S) <= 100

// Output
// Output one number which is the count of number of consonants present in the string.

// Sample Input 1
// masaischool

// Sample Output 1
// 6

function countVowels(str) {
    let vowelsCount = 0;
    let consonantCount = 0;
    for (let ele of str) {
        if (ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u") {
            vowelsCount++;
        } else {
            consonantCount++;
        }
    }
    console.log("vowels count is", vowelsCount);
    console.log("consonant count is", consonantCount);
}
countVowels("masaischool")