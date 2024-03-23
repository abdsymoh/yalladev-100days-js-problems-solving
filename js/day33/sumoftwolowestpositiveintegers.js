// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 33 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (33) Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a,b) => a - b)
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16
