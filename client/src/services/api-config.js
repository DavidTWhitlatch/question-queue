import axios from 'axios';

const baseUrl = 'https://questionqueue-env.eba-hzducp3t.us-east-2.elasticbeanstalk.com/'

const api = axios.create({
  baseURL: baseUrl
})

export default api;