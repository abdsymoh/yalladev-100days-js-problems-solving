// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (56) Highest Scoring Word
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let words = x.split(" ");
  let everyWordScoring = words.map((word) =>
    word
      .split("")
      .map((c) => Number(c.replace(c, alphabet.indexOf(c) + 1)))
      .reduce((a, b) => a + b)
  );
  let highestScoring = everyWordScoring.reduce((a, b) => (b > a ? b : a));
  for (let i = 0; i < words.length; i++) {
    if (highestScoring === everyWordScoring[i]) {
      return words[i];
    }
  }
}

console.log(high("man i need a taxi up to ubud")); // taxi
console.log(high("what time are we climbing up the volcano")); // volcano
console.log(high("take me to semynak")); // semynak
