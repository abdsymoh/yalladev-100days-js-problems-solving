// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 27 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (27) Mumbling

function accum(s) {
  return s
  .split("")
  .map((el, i) => el.toUpperCase() + el.repeat(i).toLowerCase()).join("-")
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"