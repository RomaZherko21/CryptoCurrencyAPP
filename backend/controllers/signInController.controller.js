const SignInService = require("../services/signIn.service");

class SignInController {
  signInUser(req, res) {
    SignInService.getUser(req.query, res);
  }
}

module.exports = new SignInController();
