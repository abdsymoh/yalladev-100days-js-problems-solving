// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # 43
//  Problem Level : [ 6 kyu ]
// (43) Who likes it?

// []                                                 -->  "no one likes this"
// ["Peter"]                                      -->  "Peter likes this"
// ["Jacob", "Alex"]                          -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]               -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names,
// the number in "and 2 others" simply increases.

function likes(names) {
  switch (true) {
    case names.length == 1:
      return `${names[0]} likes this`;
    case names.length == 2:
      return `${names[0]} and ${names[1]} like this`;
    case names.length == 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    case names.length >= 4:
      let others = names.splice(2).length;
      return `${names[0]}, ${names[1]} and ${others} others like this`;
    default:
      return `no one likes this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Peter"]));
