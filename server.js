const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcryptjs");

const server = express();

const Users = require("./users/users-model.js");

const authRouter = require("./auth/auth-router.js");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("It's working");
});

server.use("/api/auth", authRouter);

server.get("/api/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
