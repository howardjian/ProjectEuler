// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const isPrime = (num) => {
  const limit = Math.ceil(Math.sqrt(num));
  for(let i = 2; i <= limit; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true;
}

const sumOfPrimesBelow = (num) => {
  let total = 2;
  for(let i = 3; i < num; i+=2) {
    if(isPrime(i)) {
      total += i;
    }
  }
  return total;
}

console.log(sumOfPrimesBelow(2000000))
