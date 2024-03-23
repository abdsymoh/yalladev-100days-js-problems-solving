// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 10 Of 100 Days Of JavaScript Problems Solving

// (10) Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers) {
  let sum = 0;
  for (num of numbers) {
    num = num * num;
    sum += num;
  }
  return sum;
}
