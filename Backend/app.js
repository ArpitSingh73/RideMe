const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user.routes");


const connectToDb = require("./db")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;
