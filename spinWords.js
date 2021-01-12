// function spinWords(str) {
//   const strArray = str.split(" ");
//   function revW(word) {
//     if (word.length === 1) return word;
//     return revW(word.slice(1)) + word[0];
//   }

//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length >= 5) {
//       strArray[i] = revW(strArray[i]);
//     }
//   }
//   return strArray.join(" ");
// }

function spinWords(str) {
  return str
    .split(" ")
    .map((w) => {
      return w.length >= 5 ? w.split("").reverse().join("") : w;
    })
    .join(" ");
}

console.log(spinWords("Thisis"));
