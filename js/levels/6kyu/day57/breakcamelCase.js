// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (57) Break camelCase
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2")
}

console.log(solution("")); // ""
console.log(solution("camelCasing")); // "camel Casing"
console.log(solution("camelCasingTest")); // "camel Casing Test"
