const { randomUUID } = require("crypto");

module.exports = [
  {
    id: randomUUID(),
    name: "Jordan",
    age: 25,
  },
  {
    id: randomUUID(),
    name: "Miro",
    age: 21,
  },
];
