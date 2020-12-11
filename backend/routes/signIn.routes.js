const express = require('express');
const signInRouter = express.Router();
const jsonParser = express.json();
const SignInController = require("../controllers/signInController.controller");

signInRouter.get('/',jsonParser, SignInController.signInUser);

module.exports = signInRouter;