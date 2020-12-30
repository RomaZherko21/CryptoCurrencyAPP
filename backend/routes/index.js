const express = require("express");
const router = express.Router();

const allUsersRouter = require("./allUsers.routes");
const authRouter = require("./auth.routes");

router.use("/allUsers", allUsersRouter);
router.use("/auth", authRouter);

module.exports = router;
