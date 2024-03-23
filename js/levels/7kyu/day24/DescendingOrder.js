// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 24 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (24) Descending Order

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}

console.log(descendingOrder(42145)); // 54421
