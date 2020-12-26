import * as axios from "axios";
import config from './config'

const signInAPI = {
  async signIn(user) {
    return await axios.get(`${config.URL}/signIn?email=${user.email}&password=${user.password}`);
  },
};

export default signInAPI;
