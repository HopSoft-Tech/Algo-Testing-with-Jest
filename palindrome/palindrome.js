// Solution 1
// const palindrome = (str) => {
// 	return str === str.split('').reverse().join('');
// };

const palindrome = (str) => {
  return str.split("").every((char, index) => {
    return char === str[str.length - 1 - index];
  });
};

module.exports = palindrome;
