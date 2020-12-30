const express = require("express");
const app = express();
const router = require("./routes/index");
const process = require("dotenv").config();
const Sequelize = require("sequelize");
const user = require("./models/user");
const bodyParser = require("body-parser");
const cors = require("cors");


const corsOptions = {
  origin: "http://localhost:3000" // Provide CORS policy access to localhost:3000
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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

const HOST = process.parsed.SERVER_HOST || "localhost";
const PORT = process.parsed.SERVER_PORT || 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, HOST, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  })
  .catch((err) =>
    console.log(`
  Error: server wasn't started
  ${err}`)
  );

app.use("/", router);
