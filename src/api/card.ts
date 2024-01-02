import { DashBoardData } from '@/components/modal/addTodoModal/addTodoModal';
import { CardData } from '@/types/Card';
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
  const option = {
    endpoint: `/cards/${cardId}`,
    method: 'GET',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result.data;
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
  const option = {
    endpoint: `/cards/${cardId}}`,
    method: 'DELETE',
  };

  const result = await axios.post('/api/withAuthHandler', option);
  return result;
}
