import { instance } from '@/libs/api';
import { CardData } from '@/types/Card';
import axios from 'axios';

export async function getCards(columnId: number) {
  const option = {
    endpoint: `/cards?columnId=${columnId}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function getDetailCard(cardId: string) {
  const option = {
    endpoint: `/cards/${cardId}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function postCard(newData: CardData) {
  const data = {
    newData,
  };

  const option = {
    endpoint: '/cards',
    method: 'POST',
    data: data,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function putCard(cardId: number, newData: CardData) {
  const data = {
    newData,
  };

  const option = {
    endpoint: `/cards/${cardId}`,
    method: 'PUT',
    data: data,
  };

  const response = await axios.post('/api/withAuthHandler', option);

  return response.data;
}

export async function deleteCard(cardId: number) {
  const response = await instance.delete(`/cards/${cardId}`);
  return response.data;
}
