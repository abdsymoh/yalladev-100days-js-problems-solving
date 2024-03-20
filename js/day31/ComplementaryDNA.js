// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Day 31 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (31) Complementary DNA

function dnaStrand(dna) {
  return dna
    .split("")
    .map((char) =>
      char == "A"
        ? "T"
        : char == "T"
        ? "A"
        : char == "G"
        ? "C"
        : char == "C"
        ? "G"
        : char
    )
    .join("");
}

console.log(dnaStrand("AAAA")); // "TTTT"
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
