// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const getDivisors = (num) => {
  const divisors = {};

  while(num > 1) {
    // no need to check for primes since this will loop through and reset
    for(let i = 2; i <= num; i++) {
      if(num % i === 0) {
        if(!divisors[i]) {
          divisors[i] = 1;
        } else {
          divisors[i]++;
        }
        num = (num/i);
        break;
      }
    }
  }
  return divisors;
}

const smallestMultiple = (num) => {
  const cache = {1: 1};
  for(let i = 2; i <= num; i++) {
    const divisors = getDivisors(i);
    for(let d in divisors) {
      if(!cache[d] || cache[d] < divisors[d]) {
        cache[d] = divisors[d];
      }
    }
  }

  const smallestMultiples = Object.keys(cache);
  const result = smallestMultiples.reduce((acc = 1, val) => acc * Math.pow(+val, cache[+val]));
  return result;
}

console.log(smallestMultiple(20));
