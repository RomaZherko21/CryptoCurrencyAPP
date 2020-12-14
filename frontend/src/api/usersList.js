import * as axios from "axios";
const URL = "http://localhost:5000";

const usersListAPI = {
  async getUsers(page) {
    return await axios.get(`${URL}/allUsers?page=${page}`);
  },
  async putUser(user) {
    return await axios.put(`${URL}/allUsers`, user);
  },
};

export default usersListAPI;
