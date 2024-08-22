const express = require("express");
// const fetch = (url, init) =>
//   import("node-fetch").then((module) => module.default(url, init));
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;

const envelopes = [];

const example_envelope = {
  id: "1234",
  budget: 5000,
  description: "hello world",
};

// Get all envelopes
app.get("/", (req, res) => {
  res.json(envelopes);
});

// Get envelope at specific ID
app.get("/envelopes/:id", (req, res) => {
  const envelope_id = req.params["id"];
  const envelope = envelopes.find((e) => e.id === envelope_id);
  res.json(envelope);
});

// Create envelope with unique ID
app.post("/envelopes", (req, res) => {
  const envelope = req.body;
  const existing_envelope = envelopes.find((e) => e.id === envelope.id);
  if (existing_envelope != null) {
    res.status(500).send();
  }

  envelopes.push(envelope);
  res.json({ envelopes });
});

// Update budget of existing element
app.put("/envelopes/:id", (req, res) => {
  const envelope_id = req.params["id"];
  let envelope = envelopes.find((e) => e.id === envelope_id);
  envelope = envelope["budget"] -= req.body.to_subtract;
  res.json({ envelopes });
});

// Delete envelope by ID
app.delete("/envelopes/:id", (req, res) => {
  const envelope_id = req.params["id"];
  let envelope = envelopes.indexOf((e) => e.id === envelope_id);
  envelopes.splice(envelope, 1);
  res.json({ envelopes });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000/ <- use this to see webapp.
