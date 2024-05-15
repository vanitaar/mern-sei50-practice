require("dotenv").config();
require("./config/database");

const User = require("../models/user");

const users = [
  { email: "simon@ga.co", name: "simon", password: "123" },
  { email: "faith@ga.co", name: "faith", password: "123" },
];

const main = async () => {
  await User.deleteMany({});

  await User.create(users);
};

main();

// run node seed.js in terminal
