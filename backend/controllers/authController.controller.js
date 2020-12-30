const AuthService = require("../services/authService.service");

class AuthController {
  signInUser(req, res) {
    AuthService.getUser(req.query, res);
  }
  postNewUser(req, res) {
    for (let item of Object.values(req.body)) {
      if (item === "") {
        console.log(`Error: postNewUser
        ${err}`);
        return res.status(400).json({
          error: true,
          message: "Sorry. Empty sign up fields!",
        });
      }
    }

    AuthService.postNewUser(req.body, res);
  }
}

module.exports = new AuthController();
