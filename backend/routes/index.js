const express = require("express");
const router = express.Router();

const signUpRouter = require("./signUp.routes");

router.use("/signUp", signUpRouter);

module.exports = router;
