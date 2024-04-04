// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/abdsymoh

// Problems Solving With JavaScript # (45) Create Phone Number
//  Problem Level : [ 6 kyu ]
// Problem Link : https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  let template = "(nnn) nnn-nnnn";
  for (num of numbers) {
    template = template.replace("n", num);
  }
  return template;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//"(123) 456-7890"
