// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 25 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (25) Get the Middle Character

function getMiddle(s) {
if (s.length % 2 === 0){
  return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2)
} else {
  return s.charAt(Math.floor(s.length / 2))
}
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
