const express = require("express");
const app = express();

const routes = require("./shared/routes");

app.use(routes);
app.use(express.json());

app.listen(3001, () => {
  console.log("Running on 3001");
});
