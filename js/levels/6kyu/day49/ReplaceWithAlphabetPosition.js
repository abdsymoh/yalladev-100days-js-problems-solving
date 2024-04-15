// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (49) Replace With Alphabet Position
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/546f922b54af40e1e90001da

/*
given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((c) => c.match(/[a-z]/gi))
    .map((c) => c.replace(c, alphabet.indexOf(c) + 1))
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition("The narwhal bacons at midnight."));
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
