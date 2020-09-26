require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(require("./routes"));

server.listen(3333);
