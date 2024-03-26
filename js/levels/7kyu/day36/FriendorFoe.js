// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 36 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (36) Friend or Foe?

function friend(friends) {
  return friends.filter(ele => ele.length === 4 && isNaN(ele));
}

console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "1234", "4", "Cool Man"])); // ["Ryan"]
console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]
console.log(friend(["Hell", "Is", "a", "badd", "word"])); // ["Love", "Your", "Face"]
