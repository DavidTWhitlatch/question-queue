import axios from 'axios';

const baseUrl = 'https://3.128.203.44/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;