const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const server = express();

const sessionConfig = require("./config/session-config.js");
const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const restrictedRouter = require("./restricted/restricted-router.js");
const restricted = require("./auth/restricted.js");

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(sessionConfig));

server.get("/", (req, res) => {
  res.status(200).send("It's working");
});

server.use("/api/", authRouter);
server.use("/api/users", restricted, usersRouter);
server.use("/api/restricted", restricted, restrictedRouter);

module.exports = server;
