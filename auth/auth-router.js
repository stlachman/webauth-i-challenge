const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/register", validateRegistration, (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findUser({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username;
        req.session.userId = user.id;
        res.status(200).json({
          message: `Hello ${username}, welcome to our app!`,
          session: req.session
        });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({ message: "There was a logging out" });
      } else {
        res.json({ message: "Good bye for now!" });
      }
    });
  }
});

function validateRegistration(req, res, next) {
  const user = req.body;

  if (user && user.username && user.password) {
    next();
  } else {
    res.status(400).json({
      message: "A username and password is required to create an account"
    });
  }
}

module.exports = router;
