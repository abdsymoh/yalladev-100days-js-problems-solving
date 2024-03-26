// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 35 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (35) Two to One

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join("")
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
