import axios from 'axios';

const baseUrl = 'https://action-cable-example.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;