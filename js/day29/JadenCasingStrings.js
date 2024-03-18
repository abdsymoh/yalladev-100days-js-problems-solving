// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 29 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (29) Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str);
console.log(str.toJadenCase());
