const express = require('express');
const allUsersRouter = express.Router();
const jsonParser = express.json();
const AllUsersController = require("../controllers/allUsersController.controller");

allUsersRouter.get('/',jsonParser, AllUsersController.getUsers);

module.exports = allUsersRouter;