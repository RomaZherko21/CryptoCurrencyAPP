const app = require("../app");
class AllUsersService {
  getUsers(page, res) {
    let sql = `SELECT firstName, lastName, email FROM users
    LIMIT ${(page - 1) * 6},6`;
    app.connection.query(sql, (err, rows) => {
      if (err) {
        res.json({
          error: true,
          message: "No Users!",
        });
      } else {
        res.json({ users: [...rows], error: false });
      }
    });
  }
  putUser(user, res) {
    let sql = `UPDATE users SET  firstName='${user.firstName}', lastName='${user.lastName}'
    WHERE email='${user.email}'`;
    app.connection.query(sql, (err, user) => {
      if (err) {
        res.json({
          error: true,
          message: "Server ERROR!",
        });
      } else {
        res.json({message:'user was changed!'});
      }
    });
  }
}

module.exports = new AllUsersService();
