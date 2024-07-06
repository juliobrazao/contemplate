import axios from "axios";

const ENDPOINT = import.meta.env.VITE_APP_ENDPOINT;

export default class DataService {
  static async readData() {
    return axios.get(`${ENDPOINT}`);
  }
}
