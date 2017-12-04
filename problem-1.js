// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.


const findMultiplesOfNum = (num) => {
  let total = 0;
  for(let i = num; i < 1000; i+= num) {
    total += i;
  }
  return total;
}

const findMultiplesUnder1000 = () => {
  const multiplesOf3 = findMultiplesOfNum(3);
  const multiplesOf5 = findMultiplesOfNum(5);
  return multiplesOf3 + multiplesOf5;
}

console.log(findMultiplesUnder1000(1000));
