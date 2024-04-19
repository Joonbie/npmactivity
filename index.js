// before running the app
// run npm install express

// to run
// npm start
// or run node index.js

"use strict";

const express = require("express");

// Constant
const PORT = 8080;
const HOST = "127.0.0.1";
const OS = require("os");
const ENV = "DEV";

// App
const app = express();
app.get("/", (req, res) => {
  // The "/" means root folder
  res.statusCode = 200; //successful
  const msg = "Hello! Running Node.js";
  res.send(msg);
});

app.get("/test", (req, res) => {
  res.statusCode = 200;
  const msg = "Hello from /test Node";
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
