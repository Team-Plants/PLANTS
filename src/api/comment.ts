import { instance } from '@/libs/api';

export async function getComments() {
  const response = await instance.get('/comments');
  return response.data;
}
