import * as axios from "axios";
import config from './config'

const usersListAPI = {
  async getUsers(page) {
    return await axios.get(`${config.URL}/allUsers?page=${page}`);
  },
  async putUser(user) {
    return await axios.put(`${config.URL}/allUsers`, user);
  },
};

export default usersListAPI;
