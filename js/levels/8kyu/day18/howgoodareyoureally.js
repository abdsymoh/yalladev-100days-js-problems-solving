// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 18 Of 100 Days Of JavaScript Problems Solving

// (18) How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  let count = 0;
  for (p of classPoints) {
    sum += p;
    count++;
  }
  let result = sum / count;
  return yourPoints > result ? true : false;
}

console.log(betterThanAverage([2, 3], 5));
