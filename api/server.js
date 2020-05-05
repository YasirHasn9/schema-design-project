const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/test", (req, res) => {
  res.json({ message: "hello , world" });
});

module.exports = server;
