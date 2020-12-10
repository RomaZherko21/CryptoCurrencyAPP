const app = require("../app");
class SignUpService {
  postNewUser(user, res) {
    console.log(user);
    let sql = `INSERT  users( firstName, lastName, email, password)
         VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}');`;
         app.connection.query(sql, (err, _) => {
      if (err) {
        console.log("ERROR POST new user:" + err.message);
        res.json({ message: `ERROR POST new user : ${err.message}` });
      } else {
        res.json({ message: `${user.email} was saved` });
      }
    });
  }
}

module.exports = new SignUpService();
