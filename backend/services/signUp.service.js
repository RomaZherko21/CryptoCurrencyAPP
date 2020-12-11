const app = require("../app");
class SignUpService {
  postNewUser(user, res) {
    let sql = `INSERT  users( firstName, lastName, email, password)
         VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}');`;
    app.connection.query(sql, (err, _) => {
      if (err) {
        console.log("ERROR POST new user:" + err.message);
        res.json({
          error: true
        });
      } else {
        console.log("POST new user: new user was created");
        res.json({ message: `${user.email} was saved`, error: false });
      }
    });
  }
}

module.exports = new SignUpService();
