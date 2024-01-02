import { DashBoardData } from '@/components/modal/addTodoModal/addTodoModal';
import { instance } from '@/libs/api';
import axios from 'axios';

export async function getCards(
  size: number,
  cursorId: number | undefined,
  columnId: number,
) {
  const option = {
    endpoint: `/cards`,
    method: 'GET',
    params: {
      size,
      cursorId,
      columnId,
    },
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function getDetailCard(cardId: string) {
  const response = await instance.get(`/cards/${cardId}`);
  return response.data;
}

export async function postCard(newData: DashBoardData) {
  const option = {
    endpoint: '/cards',
    method: 'POST',
    data: newData,
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
}

export async function putCard(cardId: string) {
  const response = await instance.put(`/cards/${cardId}`);
  return response.data;
}

export async function deleteCard(cardId: string) {
  const response = await instance.delete(`/cards/${cardId}`);
  return response.data;
}
