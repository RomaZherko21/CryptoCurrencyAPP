const express = require('express');
const allUsersRouter = express.Router();
const AllUsersController = require("../controllers/allUsersController.controller");

allUsersRouter.get('/', AllUsersController.getUsers);
allUsersRouter.put('/', AllUsersController.putUser);

module.exports = allUsersRouter;