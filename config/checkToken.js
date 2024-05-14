const jwt = require("jsonwebtoken");

//helper functions
const storeUser = (req, res, user) => {
  res.locals.user = user;
};

const getUser = (req, res) => {
  return res.locals.user;
};

//middleware function
const checkTokenMiddleware = (req, res, next) => {
  const header = req.get("Authorization");
  const token = header.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.SECRET);
    console.log(payload.user);
    // res.locals.user = payload.user;
    storeUser(req, res, payload.user);
    next();
  } catch (error) {
    // res.status(401).json({ error });
    storeUser(req, res, null);
    next();
  }
};

module.exports = {
  checkTokenMiddleware,
  storeUser,
  getUser,
};
