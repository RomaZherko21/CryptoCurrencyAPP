const process = require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.parsed.DB_NAME,
    process.parsed.DB_USER,
    process.parsed.DB_PASSWORD,
    {
      dialect: "mysql",
      host: process.parsed.DB_HOST,
      define: {
        timestamps: false,
      },
      pool: {
        max: 5, //maximum number of connection in pool
        min: 0,
        acquire: 3000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 1000 // maximum time, in milliseconds, that a connection can be idle before being released
      }
    }
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);

module.exports = db;