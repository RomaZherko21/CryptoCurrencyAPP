const app = require("../app");
class SignInService {
  getUser(user, res) {
    app.User.findOne({ where: { email: user.email, password: user.password } })
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
}

module.exports = new SignInService();
