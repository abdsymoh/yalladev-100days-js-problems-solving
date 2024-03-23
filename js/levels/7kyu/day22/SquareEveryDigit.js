// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 22 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (22) Square Every Digit

function squareDigits(num){
  return Number(num.toString().split("").map((s) => s * s).join(""))
}

console.log(squareDigits(3212))