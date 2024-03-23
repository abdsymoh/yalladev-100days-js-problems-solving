// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 21 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (21) Disemvowel Trolls
// vowels => a, e, i, o, u

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = str.split("").filter((i) => !vowels.includes(i.toLowerCase())).join("");
  return result;
}

let str = "This website is for losers LOL";
console.log(disemvowel(str));
