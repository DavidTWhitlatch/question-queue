import api from './api-config';

export const getAllQuestions = async () => {
  const resp = await api.get('/questions');
  return resp.data;
}

export const postQuestion = async (question) => {
  const resp = await api.post('/questions', { question });
  return resp.data;
}