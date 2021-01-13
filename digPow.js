function digPow(num, k) {
  const numArray = num
    .toString()
    .split("")
    .map((n) => Number(n));
  let total = 0;
  let start = k;
  for (let i = 0; i < numArray.length; i++) {
    total += Math.pow(numArray[i], start);
    start++;
  }

  if (total / num - Math.floor(total / num) !== 0) {
    return -1;
  } else {
    return total / num >= 1 ? total / num : -1;
  }
}
console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
