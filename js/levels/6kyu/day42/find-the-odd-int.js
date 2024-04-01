// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # 42
//  Problem Level : [ 6 kyu ]
// (42) Find the odd int

// Given an array of integers,
// find the one that appears an odd number of times.

function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}
// function findOdd(A) {
//   let counts = {};
//   for (num of A) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   for (num in counts) {
//     if (counts[num] % 2 !== 0) {
//       return Number(num);
//     }
//   }
// }

console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
