const express = require("express");
const app = express();
const router = require("./routes/index");
const process = require("dotenv").config();
const Sequelize = require("sequelize");
const user = require("./models/user");

const sequelize = new Sequelize(
  process.parsed.DB_NAME,
  process.parsed.DB_USER,
  process.parsed.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false,
    },
  }
);
const User = sequelize.define("user", {
  ...user.user,
});
module.exports.User = User;

sequelize
  .sync()
  .then(() => {
    app.listen(process.parsed.SERVER_PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  })
  .catch((err) => console.log(err));

  
app.use("/", router);

// const connection = mysql.createConnection({
//   host: process.parsed.DB_HOST,
//   user: process.parsed.DB_USER,
//   password: process.parsed.DB_PASSWORD,
//   database: process.parsed.DB_NAME,
// });

// module.exports.connection = connection;
// const HOST = process.parsed.SERVER_HOST;
// const PORT = process.parsed.SERVER_PORT;

// connection.connect(function (err) {
//   if (err) {
//     console.error("Error: " + err.message);
//   } else {
//     console.log("MySQL was connected succesfully!!!");
//   }
// });


// app.listen(PORT, HOST, () => {
//   console.log(`Server has been started on port ${PORT}`);
// });
