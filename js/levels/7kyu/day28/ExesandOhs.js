// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 28 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (28) Exes and Ohs

/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. 
The string can contain any char.
*/

function XO(str) {
  str = str.toLowerCase().split("")
  return str.filter(x => x === "x").length === str.filter(o => o === "o").length;
}

console.log(XO("ooxx")); //  => true
console.log(XO("xooxx")); //  => false
console.log(XO("ooxXm")); //  => true
console.log(XO("zpzpzpp")); // => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")); // => false
