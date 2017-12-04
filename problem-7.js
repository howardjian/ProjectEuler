// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

const isPrime = (num) => {
  const limit = Math.ceil(Math.sqrt(num));
  for(let i = 2; i <= limit; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true;
}

const getNthPrimeNum = (num) => {
  const primes = [2, 3, 5, 7, 11, 13];
  let curr = 17;
  while(primes.length < num) {
    if(isPrime(curr)) {
      primes.push(curr);
    }
    curr++;
  }
  return primes[num-1];
}

console.log(getNthPrimeNum(10001));
