const { randomUUID } = require("crypto");

module.exports = [
  {
    id: randomUUID(),
    currency: "SLP",
    value: 0.12,
  },
  {
    id: randomUUID(),
    currency: "BTC",
    value: 100.0,
  },
];
