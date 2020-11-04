import axios from 'axios';

const baseUrl = 'http://18.188.36.252/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;