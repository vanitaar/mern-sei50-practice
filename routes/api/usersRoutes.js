const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersController");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", [ensureLoggedIn], usersCtrl.checkToken);
// router.get("/check-token", [checkToken], (req, res) => {
//   //   res.json({ msg: "ok" });
//   const user = getUser(req, res); //res.locals.user;
//   res.json({ msg: user });
// });
// router.get("/secret", [checkToken], (req, res) => {
//   res.json({ msg: "secret" });
// });

module.exports = router;

// const myMiddleWare = (req, res, next) => {
//     console.log("testing");
//     res.json({ msg: "stop" });
//     next();
//   };

// router.get("/check-token", [myMiddleWare], (req, res) => {
//     //   res.json({ msg: "check" });
//     const header = req.get("Authorization");
//     //   res.json({ header }); //{ "header": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NDJkNjg4ZGQ5Zjc1ZjIyNmY1MTg1ZSIsIm5hbWUiOiJnaW5ueSB3ZWFzbHkiLCJlbWFpbCI6Imdpbm55d2Vhc2x5QGhvZ3dhcnRzLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsIl9fdiI6MH0sImlhdCI6MTcxNTY2NDc0NiwiZXhwIjoxNzE1NjY1OTQ2fQ.-PgqTuPd9NHNGG2Jm5zTkeg_-sUG0ZU9LUPEwO0jMak"}
//     const token = header.replace("Bearer ", "");

//     try {
//       const decoded = jwt.verify(token, process.env.SECRET);
//       console.log(decoded);
//       res.json({ decoded });
//     } catch (error) {
//       console.log(error);
//       res.status(401).json({ error });
//     }

//     res.json({ token }); //{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NDJkNjg4ZGQ5Zjc1ZjIyNmY1MTg1ZSIsIm5hbWUiOiJnaW5ueSB3ZWFzbHkiLCJlbWFpbCI6Imdpbm55d2Vhc2x5QGhvZ3dhcnRzLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDUtMTRUMDM6MTI6MDguOTY3WiIsIl9fdiI6MH0sImlhdCI6MTcxNTY2NDc0NiwiZXhwIjoxNzE1NjY1OTQ2fQ.-PgqTuPd9NHNGG2Jm5zTkeg_-sUG0ZU9LUPEwO0jMak"}
//   });
