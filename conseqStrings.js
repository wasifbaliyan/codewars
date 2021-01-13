function conseqStrings(strarr, k) {
  const sorted = strarr.sort((a, b) => a.length - b.length);
  console.log(sorted);
}

console.log(
  conseqStrings(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);
