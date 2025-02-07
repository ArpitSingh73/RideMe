const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectToDb = require("./db")

app.use(cors());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
