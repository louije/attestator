require("./intl-support")();

const print = require("./print");
const { people, address, city } = require("./data");

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/print", (req, res) => {
  let { nickname, reasons } = req.query;
  let { name, birthdate, birthplace } = people[nickname]
      || { name: undefined, birthday: undefined, birthplace: undefined };

  print(name, birthdate, birthplace, reasons, address, city);
  res.redirect("/ok.html")
});

app.listen(port, () => console.log(`Serving on http://localhost:${port}`));
