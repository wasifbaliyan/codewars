// Convert string to camel case and remove _ and - chars from it.

function toCamelCase(str) {
  if (str.length === 0) return "";
  const strArray = str.split(/[-_]/gi);

  const newArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if (i === 0) {
      newArray.push(strArray[i]);
    } else {
      const char = strArray[i].charAt(0).toUpperCase();
      const charLeft = strArray[i].slice(1);
      newArray.push(char + charLeft);
    }
  }
  return newArray.join("");
}

console.log(toCamelCase("hello-how-are-you"));
console.log(toCamelCase("Hi_there-good-guys"));
