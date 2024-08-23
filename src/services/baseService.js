import axios from 'axios';

export default class BaseService {
  constructor() {
    this.baseUrl = 'http://localhost:3000'; // Replace with your base URL
  }

  async get(endpoint) {
    const url = `${this.baseUrl}/${endpoint}`;
    const response = await axios.get(url);
    return response.data;
  }

  async post(endpoint) {
    const url = `${this.baseUrl}/${endpoint}`;
    const response = await axios.post(url);
    return response.data;
  }
}