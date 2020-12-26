import * as axios from "axios";
import config from './config'

const signUpAPI = {
  async postNewUser(user) {
    return await axios.post(`${config.URL}/signUp`, user);
  },
};

export default signUpAPI;
