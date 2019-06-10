const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const restrictedRouter = require("./restricted/restricted-router.js");
const restricted = require("./auth/restricted.js");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).send("It's working");
});

server.use("/api/", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/restricted", restricted, restrictedRouter);

module.exports = server;
