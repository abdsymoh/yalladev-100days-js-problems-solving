// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on X (Twitter) : https://twitter.com/abdsymoh

// Day 8 Of 100 Days Of JavaScript Problems Solving

// (8) A Needle in the Haystack

function findNeedle(haystack) {
  let index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

let haystack = ["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false];
console.log(findNeedle(haystack));
