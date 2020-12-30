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

module.exports = new SignUpService();
