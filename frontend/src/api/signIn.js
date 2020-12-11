import * as axios from "axios";
const URL = "http://localhost:5000";

const signInAPI = {
  async signIn(user) {
    return await axios.get(`${URL}/signIn?email=${user.email}&password=${user.password}`);
  },
};

export default signInAPI;
