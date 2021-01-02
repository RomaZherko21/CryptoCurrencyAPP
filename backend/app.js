const express = require("express");
const app = express();
const router = require("./routes/index");
const process = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index");


const corsOptions = {
  origin: process.parsed.CLIENT_URL // Provide CORS policy access to localhost:3000
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const HOST = process.parsed.SERVER_HOST || "localhost";
const PORT = process.parsed.SERVER_PORT || 5000;

db.sequelize
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
