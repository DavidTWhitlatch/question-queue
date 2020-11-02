import api from 'services/api-config';

export const postUsername = async (username) => {
  const resp = await api.post('/usernames', { username });
  return resp.data;
}