const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bello World!!!!!<h1/>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000");
});
