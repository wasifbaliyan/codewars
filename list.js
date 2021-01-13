function list(names) {
  const mapped = names.map((n, i) => {
    if (i === names.length - 1) {
      return `& ${n.name}`;
    } else if (i === names.length - 2) {
      return `${n.name}`;
    } else {
      return `${n.name},`;
    }
  });
  return mapped.join(" ");
}
console.log(list([{ name: "mani" }, { name: "sam" }, { name: "john" }]));
