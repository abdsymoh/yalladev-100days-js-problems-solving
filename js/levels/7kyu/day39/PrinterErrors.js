// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # 39
//  Problem Level : [ 7 kyu ]
// (39) Printer Errors

function printerError(s) {
  let count = 0;
  for (i = 0; i < s.length; i++) {
    s[i] > "m" ? count++ : "";
  }
  return `${count}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
