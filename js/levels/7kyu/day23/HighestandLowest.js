// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 23 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (23) Highest and Lowest

function highAndLow(numbers) {
  numbers = numbers.split(" ")
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
