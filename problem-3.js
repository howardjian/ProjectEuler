// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactorOf = (num) => {
  let i = 2;
  while(i < num) {
    if(num%i === 0) {
      num = num/i;
      i = 2;
    } else {
      i++;
    }
  }
  return num;
}

console.log(findLargestPrimeFactorOf(600851475143));
