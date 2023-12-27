module.exports = {
  "*.{ts,tsx}": [() => "yarn types:check", "yarn lint:check"],
};
