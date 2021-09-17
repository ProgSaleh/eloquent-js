// Not my solution!
// Still trying to understand line 9!!!

let grid = '';
let size = 8;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) {
      grid += ' ';
    } else {
      grid += '#';
    }
  }
  grid += '\n';
}
console.log(grid);