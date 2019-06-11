const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

module.exports = {
  name: "super",
  secret: "A long secret, that no one will guess",
  resave: false, // if there are no changes to the session, then don't save it,
  saveUninitialized: true, // GDPR Compliance / true in development, false in production
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true // prevents client JS from accessing cookie
  },
  store: new KnexSessionStore({
    knex: require("../database/dbConfig.js"),
    tablename: "sessions",
    sidfieldname: "sid",
    createTable: true,
    clearInterval: 1000 * 60 * 15 // every 15 minutes clear out all expired sessions
  })
};
