import { instance } from '@/libs/api';

export async function getCards() {
  const response = await instance.get('/cards');
  return response.data;
}

export async function getDetailCard(cardId: string) {
  const response = await instance.get(`/cards/${cardId}`);
  return response.data;
}

export async function postCard() {
  const response = await instance.post('/cards');
  return response.data;
}

export async function putCard(cardId: string) {
  const response = await instance.put(`/cards/${cardId}`);
  return response.data;
}

export async function deleteCard(cardId: string) {
  const response = await instance.delete(`/cards/${cardId}`);
  return response.data;
}
