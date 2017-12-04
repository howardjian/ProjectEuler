// And the question is... each number can construct a chain given the following formula: Given a number x, if x is even, take x and divide by 2 else if x is odd take x multiply by 3 and add 1. Repeat these steps on x until x reaches 1. The resulting numbers are the chain of x. For example. If we start we 10. It's even. We divide by 2 and get 5. 5 is odd multiply by three and plus one is 16. 16/2 is 8, 8/2 is 4... And so on. 10 - 5 - 16 - 8 - 4 - 2 - 1. 10's chain has a length of 7. Now find which number has the longest chain under 100 and part two is to find the longest chain after one million.

function getNextNumber(x) {
  if(x % 2 === 0) {
    return x/2;
  } else {
    return 3*x+1;
  }
}

// collatz sequence
function getChainLengthOfNum(x, cache) {
  const chain = [];
  const initVal = x;

  while(x >= 1 && !cache[initVal]) {
    chain.push(x);
    x = getNextNumber(x);

    if(x in cache) {
      for(let i = 0; i < chain.length; i++) {
        cache[chain[i]] = chain.length + cache[x] - i;
      }
      break;
    }
  }
  return cache[initVal];
}

function findLongestChain(x) {
  const cache = {
    1: 1
  }

  let maxNum = 1,
      maxLength = 1;

  for(let i = 2; i < x; i++) {
    let newLength;

    if(i in cache) {
      newLength = cache[i];
    } else {
      newLength = getChainLengthOfNum(i, cache);
    }

    if(newLength > maxLength) {
      maxNum = i;
      maxLength = newLength;
    }
  }

  return (maxNum + ": " + maxLength);
}

// const start = Date.now();
// console.log(findLongestChain(1000000))
// console.log(Date.now() - start);

function collatzSequenceCount(n) {
  let sequenceCount = 1;
  let startingNum = n;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequenceCount++;
  }
  return {number: startingNum, count: sequenceCount};
}

function findLongestCollatzSequence(limit) {
  let longestSeqCount = 0;
  let longestSeqStartNum = null;
  for (let i = 1; i < limit; i++) {
    if (collatzSequenceCount(i).count > longestSeqCount) {
      longestSeqCount = collatzSequenceCount(i).count;
      longestSeqStartNum = collatzSequenceCount(i).number;
    }
  }
  return longestSeqStartNum;
}

const start = Date.now();
console.log(findLongestCollatzSequence(1000000));
console.log(Date.now()- start);
