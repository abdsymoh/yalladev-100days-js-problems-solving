// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript [ 6 kyu ]
// (55) Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
