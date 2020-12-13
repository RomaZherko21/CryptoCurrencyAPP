const express = require("express");
const router = express.Router();

const signUpRouter = require("./signUp.routes");
const signInRouter = require("./signIn.routes");
const allUsersRouter = require("./allUsers.routes");

router.use("/signUp", signUpRouter);
router.use("/signIn", signInRouter);
router.use("/allUsers", allUsersRouter);

module.exports = router;
