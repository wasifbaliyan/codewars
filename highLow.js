// function highAndLow(numbers) {
//   // ...
//   const nums = numbers.split(" ");
//   let tempLow = Infinity;
//   let tempHigh = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (Number(nums[i]) < tempLow) {
//       tempLow = Number(nums[i]);
//     }
//     if (Number(nums[i] > tempHigh)) {
//       tempHigh = Number(nums[i]);
//     }
//   }
//   return `${tempHigh},${tempLow}`;
// }

function highAndLow(numbers) {
  const nums = numbers.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
