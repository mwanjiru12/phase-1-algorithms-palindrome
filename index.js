/**
 * Returns true if the given string is a palindrome, and false otherwise.
 * A palindrome is a string that reads the same forwards and backwards,
 * ignoring spaces, punctuation, and case.
 *
 * @param {string} str - The string to check for palindromeness.
 * @returns {boolean} True if the string is a palindrome, and false otherwise.
 */
function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Check if the cleaned string is the same as the reversed string
  return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello world")); // false
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
