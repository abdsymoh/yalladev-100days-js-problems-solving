// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # 40
//  Problem Level : [ 7 kyu ]
// (40) Regex validate PIN code

function validatePIN(pin) {
  // return true if pin = 4 digits or exactly 6 digits.
  // return false if pin less than 4 more than 6 and includes letters
  return !isNaN(pin) && pin.length === 4 || pin.length === 6 || Math.sign(pin)
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("098765")); // true
console.log(validatePIN("-1.234")); // false
console.log(validatePIN(".234")); // false
