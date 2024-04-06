// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (46) Bit Counting
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function (n) {
  return n.toString(2).match(/1/g) === null ? 0 : n.toString(2).match(/1/g).length;
};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2
