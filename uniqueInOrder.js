// given a string to return an array with unique chars

function uniqueInOrder(str) {
  if (str.length === 0) return [];

  const freq = {};

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = freq[str[i]] ? freq[str[i]] + 1 : 1;
  }

  return Object.keys(freq);
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
