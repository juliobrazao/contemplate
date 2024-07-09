import axios from "axios";
import { User } from "../models/user";

const ENDPOINT = `${import.meta.env.VITE_APP_ENDPOINT}/users`;

export default class UserService {
  static async createUser(user: User) {
    return axios.post(ENDPOINT, user).then((response) => response.data);
  }

  static async readUsers() {
    return axios.get(ENDPOINT).then((response) => response.data);
  }

  static async readUser(userId: string) {
    return axios.get(`${ENDPOINT}/${userId}`).then((response) => response.data);
  }

  static async updateUser(userId: string, user: Partial<User>) {
    return axios
      .patch(`${ENDPOINT}/${userId}`, user)
      .then((response) => response.data);
  }

  static async deleteUser(userId: string) {
    return axios
      .delete(`${ENDPOINT}/${userId}`)
      .then((response) => response.data);
  }
}
