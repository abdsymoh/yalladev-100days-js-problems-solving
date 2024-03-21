// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 32 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (32) Credit Card Mask

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("Skippy"));
console.log(maskify("1"));
console.log(maskify(" "));