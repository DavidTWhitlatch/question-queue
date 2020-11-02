import api from 'services/api-config';

export const getOneRoom = async (code) => {
  const resp = await api.get(`/rooms/get?code=${code}`);
  return resp.data;
}

export const postRoom = async (room) => {
  const resp = await api.post('/rooms', { room });
  return resp.data;
}