const db = require("../models/index");
class AllUsersService {
  getUsers(page, res) {
    db.user.findAll({
      attributes: ["firstName", "lastName", "email"],
      raw: true,
      offset: (page - 1) * 6,
      limit: 6,
    })
      .then((users) => {
        res.status(200).json({ users, error: false });
      })
      .catch((err) => {
        console.log(`Error: getUsers
        ${err}`);
        res.status(400).json({
          error: true,
          message: "Sorry. There is no other users!",
        });
      });
  }
  putUser(user, res) {
    db.user.update(
      { firstName: user.firstName, lastName: user.lastName },
      { where: { email: user.email } }
    )
      .then(function () {
        res.status(201).json({ error: false, message: "user was changed!" });
      })
      .catch((err) => {
        console.log(`Error: putUser
        ${err}`);
        res.status(400).json({
          error: true,
          message: "Sorry. We couldn't change user fields!",
        });
      });
  }
}

module.exports = new AllUsersService();
