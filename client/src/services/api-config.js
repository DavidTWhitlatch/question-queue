import axios from 'axios';

const baseUrl = 'https://api.questionqueue.com/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;