const router = require("express").Router();
const Users = require("./users-model.js");
const restricted = require("../auth/restricted.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
