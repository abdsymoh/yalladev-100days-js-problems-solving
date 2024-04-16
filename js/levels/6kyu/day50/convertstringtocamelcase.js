// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (50) Convert string to camel case
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  }
  return str
    .split("")
    .map((c) => (c === "-" || c === "_" ? " " : c))
    .join("")
    .split(" ")
    .map((c,i) => i === 0 ? c : c[0].toUpperCase() + c.substring(1))
    .join("");
}

// =========================
console.log(toCamelCase("")); // ""
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"
// =========================
