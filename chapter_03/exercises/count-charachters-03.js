function countBs(str) {
  if (!str || !str.length) {
    return -1;
  }
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      counter++;
    } else {
      continue;
    }
  }
  return counter;
}
console.log(countBs());

function countChar(str, c) {
  if (!str || !str.length || !c || !c.length) {
    return -1;
  }
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      counter++;
    } else {
      continue;
    }
  }
  return counter;
}
console.log(countChar("kakkerlak", "k"));
