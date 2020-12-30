import * as axios from "axios";
import config from "./config";

const signInAPI = {
  async signIn(user) {
    return await axios
      .get(
        `${config.SERVER_API}/auth/signIn?email=${user.email}&password=${user.password}`
      )
      .catch((error) => {
        console.log(error);
      });
  },
};

export default signInAPI;
