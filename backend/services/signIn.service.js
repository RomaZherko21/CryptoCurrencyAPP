const app = require("../app");
class SignInService {
  getUser(user, res) {
    app.User.findOne({ where: { email: user.email, password: user.password } })
      .then((user) => {
        if (!user) {
          res.status(405).json({
            error: true,
            message: "wrong data!",
          });
        }
        res.status(200).json({ user, error: false });
      })
      .catch(() =>
        res.status(404).json({
          error: true,
          message: "Server ERROR!",
        })
      );
  }
}

module.exports = new SignInService();
