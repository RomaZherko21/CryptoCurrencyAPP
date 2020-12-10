const express = require("express");
const app = express();
const mysql = require("mysql2");
const router = require("./routes/index")
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: 'cryptocurrency'
});
module.exports.connection = connection;
const HOST = "localhost";
const PORT = 5000;


connection.connect(function(err){
  if (err) {
    console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`server has been started on port ${PORT}`);
});