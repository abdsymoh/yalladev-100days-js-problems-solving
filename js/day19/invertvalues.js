// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 19 Of 100 Days Of JavaScript Problems Solving

// (19) Invert values

function invert(array) {
  return array.map((n) => (n === 0 ? 0 : n * -1));
}

let arr = [1, -2, 3, -4, 5];
// let arr = [];
console.log(invert(arr));
