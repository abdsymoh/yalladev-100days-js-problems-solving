// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 34 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (34) Beginner Series #3 Sum of Numbers

// function getSum(a, b) {
//   let min = Math.min(a, b);
//   max = Math.max(a, b);
//   return ((max - min + 1) * (max + min)) / 2
// }

function getSum(a, b) {
  let num = [];
  let min = Math.min(a, b);
  max = Math.max(a, b);
  for (i = min; i <= max; i++) {
    num.push(i);
  }
  if (a == b) {
    return a;
  }
  return num.reduce((a, b) => a + b);
}

console.log(getSum(-1, 2));
console.log(getSum(-1, 0));
console.log(getSum(1, 1));
console.log(getSum(0, 1));
console.log(getSum(1, 2));
console.log(getSum(1, 0));

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
