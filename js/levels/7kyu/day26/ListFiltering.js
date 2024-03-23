// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 26 Of 100 Days Of JavaScript Problems Solving
//  Problem Level : [ 7 kyu ]

// (26) List Filtering

function filter_list(l) {
  return l.filter((el) => el === Number(el))
}

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]
