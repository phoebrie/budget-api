const express = require("express");
// const fetch = (url, init) =>
//   import("node-fetch").then((module) => module.default(url, init));
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;

const envelopes = [];
const fashion_envelopes = [];

app.get("/", (req, res) => {
  res.json(envelopes);
});

app.get("/envelopes/:envelope", (req, res) => {
  res.json(fashion_envelopes);
});

app.post("/envelopes", (req, res) => {
  const envelope = req.body;
  console.log(envelope);
  envelopes.push(envelope);
  res.json({ envelopes });
});

app.post("/envelopes/fashion", (req, res) => {
  const fashion_envelope = req.body;
  console.log(fashion_envelope);
  fashion_envelopes.push(fashion_envelope);
  res.json({ fashion_envelopes });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/ <- use this to see webapp.
