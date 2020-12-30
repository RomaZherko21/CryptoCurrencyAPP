const app = require("../app");
class SignUpService {
  postNewUser(user, res) {
    app.User.create({
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
      .catch(() =>
        res.status(404).json({
          error: true,
        })
      );
  }
}

module.exports = new SignUpService();
