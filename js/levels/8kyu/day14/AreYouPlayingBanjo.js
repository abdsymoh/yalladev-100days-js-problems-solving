// Subscribe to my channel :  https://www.youtube.com/@yalladev
// Follow me on Telegram : https://t.me/yalladev

// Day 14 Of 100 Days Of JavaScript Problems Solving

// (14) Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  return name.toLowerCase().startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Abdu"));
