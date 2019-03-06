const express = require("express");
const bodyParser = require("body-parser");
const user = require("./src/models/database.model");

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", user);

let port = 4000;

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
