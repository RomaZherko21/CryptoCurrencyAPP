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
}

module.exports = new AllUsersService();
