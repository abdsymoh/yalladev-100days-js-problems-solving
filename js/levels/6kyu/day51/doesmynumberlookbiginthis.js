// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript [ 6 kyu ]
// (51) Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  return (
    String(value)
      .split("")
      .map((n) => Number(n.replace(n, Math.pow(n, String(value).length))))
      .reduce((a, b) => a + b) === value
  );
}

console.log(narcissistic(7)); // true
console.log(narcissistic(153)); // true
console.log(narcissistic(122)); // false
console.log(narcissistic(487)); // false
