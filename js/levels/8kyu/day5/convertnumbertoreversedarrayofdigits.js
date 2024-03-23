// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on X (Twitter) : https://twitter.com/abdsymoh

// Day 5 Of 100 Days Of JavaScript Problems Solving

// (5) Convert Number To Reversed Array Of Digits

function digitize(n) {
  n = `${n}`;
  return n.split("").reverse().map(Number);
}
console.log(digitize(12345));
