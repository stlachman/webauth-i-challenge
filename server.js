const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const server = express();

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const restrictedRouter = require("./restricted/restricted-router.js");
const restricted = require("./auth/restricted.js");

const sessionConfig = {
  name: "super",
  secret: "A long secret, that no one will guess",
  resave: false, // if there are no changes to the session, then don't save it,
  saveUninitialized: true, // GDPR Compliance / true in development, false in production
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true // prevents client JS from accessing cookie
  }
};

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
