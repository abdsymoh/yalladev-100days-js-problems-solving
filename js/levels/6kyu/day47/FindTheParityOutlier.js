// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (47) Find The Parity Outlier
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  let odd = integers.filter((n) => n % 2 !== 0);
  let even = integers.filter((n) => n % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
