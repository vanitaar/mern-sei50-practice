const debug = require("debug")("mern:controllers:api:usersController");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createJWT = (user) =>
  jwt.sign({ user }, process.env.SECRET, { expiresIn: "2m" });

const create = async (req, res) => {
  debug("body: %o", req.body);
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    debug("user: %o", user);
    const token = createJWT(user);
    // res.status(201).json({ user });
    res.status(201).json(token);
  } catch (error) {
    debug("error: %o", error);
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  // res.json({ msg: "login" }); //test bruno
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user === null) {
    res.status(401).json({ msg: "User not found" });
    return;
  }
  // res.json({ email, password });

  //user.password is the hashed pw in db --> so this match returns boolean
  //password is from input
  const match = await bcrypt.compare(password, user.password);

  if (match) {
    const token = createJWT(user);
    res.json(token);
  } else {
    res.status(401).json({ msg: "Password incorrect" });
  }
};

module.exports = {
  create,
  login,
};
