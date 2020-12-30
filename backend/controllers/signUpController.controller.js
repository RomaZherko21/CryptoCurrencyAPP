const SignUpService = require("../services/signUp.service");

class SignUpController {
  postNewUser(req, res) {
    for (let item of Object.values(req.body)) {
      if (item === "")
        console.log(`Error: postNewUser
        ${err}`);
      return res.status(400).json({
        error: true,
        message: "Sorry. Empty sign up fields!",
      });
    }
    SignUpService.postNewUser(req.body, res);
  }
}

module.exports = new SignUpController();
