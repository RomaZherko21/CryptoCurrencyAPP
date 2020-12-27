const express = require("express");
const app = express();
const mysql = require("mysql2");
const router = require("./routes/index");
const process = require("dotenv").config();

const connection = mysql.createConnection({
  host: process.parsed.DB_HOST,
  user: process.parsed.DB_USER,
  password: process.parsed.DB_PASSWORD,
  database: process.parsed.DB_NAME,
});

module.exports.connection = connection;
const HOST = process.parsed.SERVER_HOST;
const PORT = process.parsed.SERVER_PORT;

connection.connect(function (err) {
  if (err) {
    console.error("Error: " + err.message);
  } else {
    console.log("MySQL was connected succesfully!!!");
  }
});

app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Server has been started on port ${PORT}`);
});
