// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 16 Of 100 Days Of JavaScript Problems Solving

// (16) Calculate Average

//  Write a function which calculates the average of the numbers in a given list.
//  Note: Empty arrays should return 0.
// 1 + 2 + 3 + 4 = 10 // 10 / 4 = 2.5

function findAverage(array) {
  if (array != 0) {
    let sum = 0;
    let count = 0;
    array.forEach((num) => {
      sum += num;
      count++;
    });
    return sum / count;
  }
  return 0;
}

let arr = [1, 2, 3, 4]; // 2.5
console.log(findAverage(arr));
