const db = require("../models/index");
class SignInService {
  getUser(user, res) {
    db.user.findOne({ where: { email: user.email, password: user.password } })
      .then((user) => {
        if (!user) {
          res.status(401).json({
            error: true,
            message: "Sorry. There is no such user!",
          });
        }
        res.status(200).json({ user, error: false });
      })
      .catch((err) => {
        console.log(`Error: getUser
          ${err}`);
        res.status(500).json({
          error: true,
          message: "Sorry. There is server side problem. We'll fix it in few minutes!",
        });
      });
  }
  postNewUser(user, res) {
    db.user.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    })
      .then((_) => {
        res
          .status(201)
          .json({ message: `${user.email} was saved`, error: false });
      })
      .catch(() => {
        console.log(`Error: postNewUser
        ${err}`);
        res.status(400).json({
          message: `Sorry. ${user.email} wasn't saved`,
          error: true,
        });
      });
  }
}

module.exports = new SignInService();
