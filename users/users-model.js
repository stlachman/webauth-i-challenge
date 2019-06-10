const db = require("../database/dbConfig.js");

module.exports = {
  add,
  getUsers
};

function add(user) {
  return db("users").insert(user, "id");
}

function getUsers() {
  return db("users");
}
