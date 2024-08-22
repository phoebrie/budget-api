const express = require("express");
// const fetch = (url, init) =>
//   import("node-fetch").then((module) => module.default(url, init));
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;

const envelopes = [];

app.get("/", (req, res) => {
  res.json(envelopes);
});

app.post("/envelopes", (req, res) => {
  const total_budget = req.body;
  console.log(total_budget);
  envelopes.push(total_budget);
  res.json({ envelopes });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/ <- use this to see webapp.
