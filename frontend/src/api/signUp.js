import * as axios from "axios";
const URL = "http://localhost:5000";

const signUpAPI = {
  postNewUser(user) {
    console.log(user)
    return axios.post(`${URL}/signUp`, user);
  },
};

export default signUpAPI;
