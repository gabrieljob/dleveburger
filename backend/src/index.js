const express = require("express");
const mongoose = require("mongoose");

const app = express();
const server = require("http").Server(app);

mongoose.connect(
  "mongodb+srv://thatjob:thatjob@cluster0-dlam4.mongodb.net/dleveburger?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

server.listen(3333, (req, res) => console.log("running on port 3333"));
