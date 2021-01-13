function twoSum(numbers, target) {
  let sorted = numbers.sort((a, b) => a - b);
  let start = 0;
  let end = sorted.length - 1;
  while (start < end) {
    if (sorted[start] + sorted[end] > target) {
      end--;
    } else if (sorted[start] + sorted[end] < target) {
      start++;
    } else {
      return [start, end];
    }
  }
}

console.log(twoSum([1, 2, 3, 9, 6, 5, 11], 14));
