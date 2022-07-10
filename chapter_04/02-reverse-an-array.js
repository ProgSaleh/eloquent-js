function reverseArr(arr) {
  if (!arr.length) {
    return [];
  }
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const arr1 = ["A", "B", "C"];
const arr2 = [4, 3, 2, 1, 0, -1, -2];

console.log(reverseArr(arr1));
console.log(reverseArr(arr2));

function reverseArrayInPlace() {
  if (!arrayValue.length) {
    return [];
  }
  const tempArr = [];
  for (let i = arrayValue.length - 1; i >= 0; i--) {
    tempArr.push(arrayValue[i]);
  }
  arrayValue = tempArr;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
