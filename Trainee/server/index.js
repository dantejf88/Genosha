const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end()
})

app.listen(3001, () => {
  console.log("Server working");
});
