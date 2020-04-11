require("./intl-support")();

const print = require("./print");

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const people = {
  cathy:  { name: "Catherine Guesde", birthdate: "13/01/1984", birthplace: "High-Wycombe (GB)" },
  lucile: { name: "Lucile Sourdès", birthdate: "24/02/1984", birthplace: "Guingamp" },
  barney: { name: "Barney Cohen", birthdate: "27/06/1986", birthplace: "Saintes" },
  louije: { name: "Louis-Jean Teitelbaum", birthdate: "27/05/1982", birthplace: "Maisons-Laffitte" }
}

app.use(express.static("public"));

app.get("/print", (req, res) => {
  let { nickname, reasons } = req.query;
  let { name, birthdate, birthplace } = people[nickname]
      || { name: undefined, birthday: undefined, birthplace: undefined };

  print(name, birthdate, birthplace, reasons);
  res.sendFile(path.join(__dirname) + "/public/ok.html")
});

app.listen(port, () => console.log(`Serving on http://localhost:${port}`));
