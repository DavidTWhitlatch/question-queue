import axios from 'axios';

const baseUrl = 'https://question-queue-api.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;