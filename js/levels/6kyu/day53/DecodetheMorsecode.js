// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript [ 6 kyu ]
// (53) Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e

const MORSE_CODE = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
  "...---...": "SOS",
};

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((word) => word.split(" ").map((letter) => MORSE_CODE[letter]).join("")).join(" ");
};

// 'HEY JUDE'
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
// 'HEY'
console.log(decodeMorse("   .... . -.--   "));
// 'SOS'
console.log(decodeMorse("...---..."));
// SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ")); // 'SOS'
