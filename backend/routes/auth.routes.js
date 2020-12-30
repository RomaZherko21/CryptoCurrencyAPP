const express = require('express');
const authRouter = express.Router();
const AuthController = require("../controllers/authController.controller");

authRouter.get('/signIn', AuthController.signInUser);
authRouter.post('/signUp', AuthController.postNewUser);

module.exports = authRouter;