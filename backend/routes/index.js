const express = require("express");
const router = express.Router();

const signUpRouter = require("./signUp.routes");
const signInRouter = require("./signIn.routes");

router.use("/signUp", signUpRouter);
router.use("/signIn", signInRouter);

module.exports = router;
