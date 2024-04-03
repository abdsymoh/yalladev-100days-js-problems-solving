// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (45) Array.diff
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  let result = [];
  if (a.length == 0) {
    return [];
  } else if (b.length == 0) {
    return a;
  } else {
    for (i = 0; i < a.length; i++) {
      for (e = 0; e < b.length; e++) {
        if (a[i] != b[e]) {
          result.push(a[i]);
        }
      }
    }
    return result;
  }
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); //[2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
