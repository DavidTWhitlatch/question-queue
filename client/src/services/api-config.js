import axios from 'axios';

const baseUrl = 'http://18.189.178.233'

const api = axios.create({
  baseURL: baseUrl
})

export default api;