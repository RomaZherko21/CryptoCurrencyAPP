const app = require("../app");
class AllUsersService {
  getUsers(page, res) {
    app.User.findAll({
      attributes: ["firstName", "lastName", "email"],
      raw: true,
      offset: (page - 1) * 6,
      limit: 6,
    })
      .then((users) => {
        res.status(200).json({ users, error: false });
      })
      .catch(() =>
        res.status(200).json({
          error: true,
          message: "No Users!",
        })
      );
  }
  putUser(user, res) {
    app.User.update(
      { firstName: user.firstName, lastName: user.lastName },
      { where: { email: user.email } }
    )
      .then(function () {
        res.status(201).json({ message: "user was changed!" });
      })
      .catch(() =>
        res.status(404).json({
          error: true,
          message: "Server ERROR!",
        })
      );
  }
}

module.exports = new AllUsersService();
