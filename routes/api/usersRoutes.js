const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersController");
const jwt = require("jsonwebtoken");

// POST /api/users
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", (req, res) => {
  //   res.json({ msg: "check" });
  const header = req.get("Authorization");
  //   res.json({ header }); //{ "header": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NDJkNjg4ZGQ5Zjc1ZjIyNmY1MTg1ZSIsIm5hbWUiOiJnaW5ueSB3ZWFzbHkiLCJlbWFpbCI6Imdpbm55d2Vhc2x5QGhvZ3dhcnRzLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsIl9fdiI6MH0sImlhdCI6MTcxNTY2NDc0NiwiZXhwIjoxNzE1NjY1OTQ2fQ.-PgqTuPd9NHNGG2Jm5zTkeg_-sUG0ZU9LUPEwO0jMak"}
  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    res.json({ decoded });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error });
  }

  res.json({ token }); //{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NDJkNjg4ZGQ5Zjc1ZjIyNmY1MTg1ZSIsIm5hbWUiOiJnaW5ueSB3ZWFzbHkiLCJlbWFpbCI6Imdpbm55d2Vhc2x5QGhvZ3dhcnRzLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsIl9fdiI6MH0sImlhdCI6MTcxNTY2NDc0NiwiZXhwIjoxNzE1NjY1OTQ2fQ.-PgqTuPd9NHNGG2Jm5zTkeg_-sUG0ZU9LUPEwO0jMak"}
});

module.exports = router;
