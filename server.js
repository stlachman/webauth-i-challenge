const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const Users = require("./users/users-model.js");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("It's working");
});

server.get("/api/users", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/api/register", (req, res) => {
  const user = req.body;

  Users.add(user)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
