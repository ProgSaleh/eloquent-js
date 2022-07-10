function range(start, end, step = 1) {
  if (!start || !end) {
    return [];
  }
  const rangeArr = [];
  if (step < 0) {
    for (let i = end; i >= start; i += step) {
      rangeArr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
  }
  return rangeArr;
}

console.log(range(1, 10));
console.log(range(2, 5, -1));

function sum(...numbers) {
  if (!numbers.length) {
    return -1;
  }
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(...range(1, 10)));
