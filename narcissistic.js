// function narcissistic(value) {
//   const arr = [...String(value)];
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += Math.pow(Number(arr[i]), arr.length);
//   }
//   return total === value;
// }

function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((v, i, arr) => v ** arr.length)
      .reduce((a, b) => a + b, 0) === value
  );
}

console.log(narcissistic(153));
console.log(narcissistic(1943));
