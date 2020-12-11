import * as axios from "axios";
const URL = "http://localhost:5000";

const signUpAPI = {
  async postNewUser(user) {
    return await axios.post(`${URL}/signUp`, user);
  },
};

export default signUpAPI;
