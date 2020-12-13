const AllUsersService = require("../services/allUsers.service");

class AllUsersController {
  getUsers(req, res) {
    AllUsersService.getUsers(req.query.page, res);
  }
}

module.exports = new AllUsersController();
