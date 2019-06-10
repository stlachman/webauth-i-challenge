const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("It's working");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on ${port}`));
