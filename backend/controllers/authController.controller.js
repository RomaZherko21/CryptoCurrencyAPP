const AuthService = require("../services/authService.service");
const db = require("../models/index");
// const config = require("../config/auth.config");
// const User = db.user;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

class AuthController {
  signInUser(req, res) {
    let user = req.query;
    db.user
      .findOne({ where: { email: user.email, password: user.password } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            error: true,
            message: "Sorry. There is no such user!",
          });
        }

        // let passwordIsValid = bcrypt.compareSync(
        //   req.body.password,
        //   user.password
        // );
        // if (!passwordIsValid) {
        //   return res.status(401).json({
        //     accessToken: null,
        //     message: "Invalid Password!",
        //   });
        // }
        // let token = jwt.sign({ id: user.id }, config.secret, {
        //   expiresIn: 86400, // 24 hours
        // });

        res.status(200).json({ user, error: false });
      })
      .catch((err) => {
        console.log(`Error: getUser
          ${err}`);
        res.status(500).json({
          error: true,
          message:
            "Sorry. There is server side problem. We'll fix it in few minutes!",
        });
      });
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
