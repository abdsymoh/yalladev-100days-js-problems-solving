// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (48) Duplicate Encoder
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// one time "(" // more than one time ")"

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((c, i, w) => (w.indexOf(c) === w.lastIndexOf(c) ? "(" : ")"))
    .join("");
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
