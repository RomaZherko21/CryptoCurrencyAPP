import * as axios from "axios";
import config from "./config";

const signUpAPI = {
  async postNewUser(user) {
    return await axios
      .post(`${config.SERVER_API}/auth/signUp`, user)
      .catch((error) => {
        console.log(error);
      });
  },
};

export default signUpAPI;
