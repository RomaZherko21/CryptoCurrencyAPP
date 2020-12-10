const express = require('express');
const signUpRouter = express.Router();
const jsonParser = express.json();
const SignUpController = require("../controllers/signUpController.controller");

signUpRouter.post('/',jsonParser, SignUpController.postNewUser);

module.exports = signUpRouter;