function isEven(n) {
  if (n < 0) {
    return "N/A";
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven((n - 2) % 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
