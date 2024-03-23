// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 30 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (30) Shortest Word

/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  return s.split(" ").reduce((a, b) => (a.length < b.length ? a : b)).length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier"));
console.log(findShort("Let's travel abroad shall we"));
