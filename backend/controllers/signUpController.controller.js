const SignUpService = require('../services/signUp.service');

class SignUpController {
  postNewUser(req, res) {
    SignUpService.postNewUser(req.body, res)
  }
}

module.exports = new SignUpController();
