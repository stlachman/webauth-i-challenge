const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  findUser
};

async function add(user) {
  const [userId] = await db("users").insert(user, "id");
  return findById(userId);
}

function find() {
  return db("users");
}

function findUser(username) {
  return db("users").where(username);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
