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

const HOST = process.parsed.SERVER_HOST;
const PORT = process.parsed.SERVER_PORT;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, HOST, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

app.use("/", router);
