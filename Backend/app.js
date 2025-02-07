const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");



const connectToDb = require("./db")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
