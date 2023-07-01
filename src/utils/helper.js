const generateRandomString = (len = 100) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$#@!%";
  const strlen = chars.length;
  let random = "";
  for (i = 1; i < len; i++) {
    random += chars[Math.floor(Math.random() * (strlen - 1))];
  }
  console.log(random);
};

module.exports = generateRandomString;
