const SignUpService = require("../services/signUp.service");

class SignUpController {
  postNewUser(req, res) {
    for (let item of Object.values(req.body)) {
      if (item === "")
        return res.json({
          error: true,
        });
    }
    SignUpService.postNewUser(req.body, res);
  }
}

module.exports = new SignUpController();
