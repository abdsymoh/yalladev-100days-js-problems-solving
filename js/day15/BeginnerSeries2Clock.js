// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 15 Of 100 Days Of JavaScript Problems Solving

// (15) Beginner Series #2 Clock

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    h *= 3.6e6;
    m *= 60000;
    s *= 1000;
    return h + m + s
  }
  return "Not a Valid Input!";
}

console.log(past(0, 1, 1));
