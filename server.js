const express = require("express");
const path = require("path");
// const favicon = require("serve-favicon");
const logger = require("morgan");
const debug = require("debug")("mern:server"); //for debug
// Always require and configure near the top
require("dotenv").config(); // console.log(process.env.DATABASE_URL);
require("./config/database"); // Connect to the database

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "dist", "vite.svg")));
app.use(express.static(path.join(__dirname, "dist")));

// Put API routes here, before the "catch all" route
app.get("/api", (req, res) => {
  res.json({ hello: "world" });
});
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  //   console.log(`Express app running on port ${port}`);
  debug(`Express app running on port ${port}`);
});
