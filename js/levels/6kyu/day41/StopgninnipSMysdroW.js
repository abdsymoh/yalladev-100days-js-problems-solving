// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # 41
//  Problem Level : [ 6 kyu ]
// (41) Stop gninnipS My sdroW!

// if word have five or more letters reversed

function spinWords(string) {
  return string.split(" ").map(w => w.length >= 5 ? w.split("").reverse().join("") : w).join(" ");
}

console.log(spinWords("Welcome"));
// "emocleW"
console.log(spinWords("Hey fellow warriors"));
// "Hey wollef sroirraw"
console.log(spinWords("This is a test"));
// "This is a test"
console.log(spinWords("This is another test"));
//"This is rehtona test"
console.log(spinWords("Just kidding there is still one more"));
// "Just gniddik ereht is llits one more"
