// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (44) Sum of Digits / Digital Root
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/541c8630095125aba6000c00

// function digitalRoot(n) {
//   return String(n)
//     .split("")
//     .map((n) => Number(n))
//     .reduce((a, b) => a + b)
//     .toString()
//     .split("")
//     .map((n) => Number(n))
//     .reduce((a, b) => a + b)
//     .toString()
//     .split("")
//     .map((n) => Number(n))
//     .reduce((a, b) => a + b);
// }
function digitalRoot(n) {
  return (--n % 9) + 1;
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2
console.log(digitalRoot(49319348752)); // 1
