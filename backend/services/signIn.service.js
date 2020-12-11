const app = require("../app");
class SignInService {
  getUser(user, res) {
    let sql = `SELECT firstName, lastName, email FROM users 
    WHERE (email = '${user.email}' AND password = '${user.password}');`;
    app.connection.query(sql, (err, rows) => {
      if (rows.length===0 || err) {
        res.json({
          error: true,
          message: "wrong data!",
        });
      } else {
        console.log("GET user: user was sended");
        res.json({ user: { ...rows[0] }, error: false });
      }
    });
  }
}

module.exports = new SignInService();
