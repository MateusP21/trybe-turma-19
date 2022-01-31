const uppercase = (str, callback) => {
  setTimeout(() => {
    return callback(str.toUpperCase());
  }, 500);
};

module.exports = { uppercase };
