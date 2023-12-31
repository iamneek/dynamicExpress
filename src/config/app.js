const express = require("express");
const router = require("../routes");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api", router);

module.exports = app;
