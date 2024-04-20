// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript [ 6 kyu ]
// (52) Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i-1]);
};

// [ "RED", "BLUE", "GREEN", "RED" ]
console.log(uniqueInOrder(["RED", "RED", "BLUE", "GREEN", "GREEN", "RED"]));
console.log(uniqueInOrder("AAABBBCCcDDDDAABB"));
