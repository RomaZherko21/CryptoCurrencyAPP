import * as axios from "axios";
import config from "./config";

const usersListAPI = {
  async getUsers(page) {
    return await axios
      .get(`${config.SERVER_API}/allUsers?page=${page}`)
      .catch((error) => {
        console.log(error);
      });
  },
  async putUser(user) {
    return await axios
      .put(`${config.SERVER_API}/allUsers`, user)
      .catch((error) => {
        console.log(error);
      });
  },
};

export default usersListAPI;
