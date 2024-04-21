// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript [ 6 kyu ]
// (54) Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  let paris = [];
  for (i = 0; i < str.length; i += 2) {
    paris.push(str.substring(i, i + 2));
  }
  for (p in paris) {
    if (paris[p].length === 1) {
      paris[p] = paris[p] + "_";
    }
  }
  return paris;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []
