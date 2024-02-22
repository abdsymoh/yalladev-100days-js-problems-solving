// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 9 Of 100 Days Of JavaScript Problems Solving

// (9) Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  let positiveNum = arr.filter((x) => x >= 0);
  for (num of positiveNum) {
    sum += num;
  }
  return sum;
}

// let myArr = [1, -4, 7, 12];
let myArr = [];
console.log(positiveSum(myArr));
