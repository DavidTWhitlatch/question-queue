import api from './api-config';

export const getAllQuestions = async (code) => {
  const resp = await api.get(`/questions?code=${code}`);
  return resp.data;
}

export const postQuestion = async (question) => {
  const resp = await api.post('/questions', { question });
  return resp.data;
}

export const postUpvote = async (userId, questionId) => {
  await api.post(`/upvote/${userId}/${questionId}`);
}