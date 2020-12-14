const AllUsersService = require("../services/allUsers.service");

class AllUsersController {
  getUsers(req, res) {
    AllUsersService.getUsers(req.query.page, res);
  }
  putUser(req, res) {
    AllUsersService.putUser(req.body, res);
  }
}

module.exports = new AllUsersController();
