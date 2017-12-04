// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (num) => {
  return num.toString() === num.toString().split('').reverse().join('');
}

const largestPalindromeNum = (digits) => {
  let start = 0;
  const end = Math.pow(10,digits-1);

  for(let i = 0; i < digits; i++) {
    start += (Math.pow(10, i)*9);
  }

  for(let beginning = start*start, finish = end*end; beginning > end; beginning--) {
    if(isPalindrome(beginning)) {
      let copyStart = start;
      while(copyStart >= end) {
        if(beginning / copyStart > start) {
          break;
        }
        if(beginning%copyStart === 0) {
          return beginning;
        }
        copyStart--;
      }
    }
  }
  return null;
}

console.log(largestPalindromeNum(3))
