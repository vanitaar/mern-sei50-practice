const mongoose = require("mongoose");
const debug = require("debug")("mern:config:database");

mongoose.set("debug", true); //for debug
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  debug(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
