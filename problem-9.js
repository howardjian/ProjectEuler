// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function findPythagoreanTriplet(numToSumTo) {
  let a = 1,
      b = 2,
      c = numToSumTo - a - b,
      abSum = Math.pow(a,2) + Math.pow(b,2),
      targetSquare = Math.pow(c, 2);

  while(a < b && abSum !== targetSquare && b < c) {
    while(b < c && abSum !== targetSquare) {
      c = numToSumTo - a - b;
      abSum = Math.pow(a,2) + Math.pow(b,2);
      targetSquare = Math.pow(c, 2);
      if(abSum !== targetSquare) {
        b++
      }
    }
    if(abSum !== targetSquare) {
      a++;
      b = a + 1;
    }
  }

  if(abSum === targetSquare) {
    return a*b*c
  }
}

console.log(findPythagoreanTriplet(1000))
